Select * 
From CovidDeaths
where continent is NOT NULL
Order by 3,4

--Select *
--From CovidVaccinations
--order by 3,4

Select location, date, total_cases, new_cases, total_deaths, population
From CovidDeaths
where continent is not null
order by 1,2

-- Observing Total cases vs Total deaths
-- likelihood of deaths if contracted COVID as per one's country

Select location, date, total_cases, total_deaths, (total_deaths/total_cases) * 100 AS PercentageOfTotalCasesPerDeaths
From CovidDeaths
Where location like '%india%' and continent is not null
order by 1,2

-- looking at totalcases vs population
-- Showing percentage of population having COVID

Select location, date, total_cases, population, (total_cases/population) * 100 AS PopulationCases
From CovidDeaths
--Where location like '%india%'
order by 1,2


-- Looking at countries with highest infection rate compared to population

Select location, population, MAX(total_cases) as HighestInfectionPerLoc, MAX((total_cases/population)) * 100 AS PercentagePopulationInfected
From CovidDeaths
where continent is not null
group by population, location
order by PercentagePopulationInfected desc


-- Countries with highest death count per population

Select location, MAX(cast(total_deaths as int)) as HighestDeathsPerLoc
From CovidDeaths
where continent is not null
group by location
order by HighestDeathsPerLoc desc

-- By continent
-- Showing continents with the highest death counts per population

Select continent, MAX(cast(total_deaths as int)) as HighestDeathsPerLoc
From CovidDeaths
where continent is not null
group by continent
order by HighestDeathsPerLoc desc

-- GLOBAL

Select SUM(new_cases) as SumOfNewCases, SUM(cast(new_deaths as int)) as SumOfNewDeaths, SUM(cast(new_deaths as int))/SUM(new_cases) * 100 AS PercentageOfTotalCasesPerDeaths
From CovidDeaths
Where continent is not null
-- group by date
order by PercentageOfTotalCasesPerDeaths desc


-- total population vs vaccination

select dea.continent, dea.location, dea.date, dea.population, vac.new_vaccinations, 
SUM(CONVERT(int,vac.new_vaccinations)) over (Partition by dea.location order by dea.location, dea.date) as RollingPeopleVaccinated
From CovidDeaths dea
Join CovidVaccinations vac
on dea.location = vac.location
and dea.date = vac.date
where dea.continent is not null
order by 2,3

-- Using CTE

with PopvsVac (Continent, Location, Date, Population, New_Vaccinations, RollingPeopleVaccinated)
as
(
select dea.continent, dea.location, dea.date, dea.population, vac.new_vaccinations, 
SUM(CONVERT(int,vac.new_vaccinations)) over (Partition by dea.location order by dea.location, dea.date) as RollingPeopleVaccinated
From CovidDeaths dea
Join CovidVaccinations vac
on dea.location = vac.location
and dea.date = vac.date
where dea.continent is not null
)
Select *, (RollingPeopleVaccinated/Population)*100 
From PopvsVac


-- Creating view for visualization

Create View GLOBAL as 
Select SUM(new_cases) as SumOfNewCases, SUM(cast(new_deaths as int)) as SumOfNewDeaths, SUM(cast(new_deaths as int))/SUM(new_cases) * 100 AS PercentageOfTotalCasesPerDeaths
From CovidDeaths
Where continent is not null
-- group by date
--order by PercentageOfTotalCasesPerDeaths desc
