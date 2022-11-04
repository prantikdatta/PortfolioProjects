/* 

Cleaning Data using SQL 

*/

Select * 
From NashvilleHousing

-----------------------------------

-- Standard sale Date format

ALTER TABLE NashvilleHousing
ADD SaleDateConverted Date; 

UPDATE NashvilleHousing
SET SaleDateConverted = CONVERT(date, SaleDate)

Select SaleDateConverted
From NashvilleHousing

--------------------------------------------------------

-- Populating property address automatically if NULL

Select *
From NashvilleHousing
Where PropertyAddress is Null
order by ParcelID

Select nvha.ParcelID, nvha.PropertyAddress, nvhb.ParcelID, nvhb.PropertyAddress
From NashvilleHousing nvha
JOIN NashvilleHousing nvhb
	on nvha.ParcelID = nvhb.ParcelID
	and nvha.[UniqueID ] <> nvhb.[UniqueID ]
-- Where nvha.PropertyAddress is Null

UPDATE nvha
SET PropertyAddress = ISNULL(nvha.PropertyAddress, nvhb.PropertyAddress)
From NashvilleHousing nvha
JOIN NashvilleHousing nvhb
	on nvha.ParcelID = nvhb.ParcelID
	and nvha.[UniqueID ] <> nvhb.[UniqueID ]
Where nvha.PropertyAddress is Null

-------------------------------------------------------------------------------

-- Breaking out property address into 2 cols based on the city

Select PropertyAddress
From NashvilleHousing

SELECT
SUBSTRING(PropertyAddress, 1, CHARINDEX(',', PropertyAddress) - 1) as Address
, SUBSTRING(PropertyAddress, CHARINDEX(',', PropertyAddress) + 1, LEN(PropertyAddress)) as Address
FROM NashvilleHousing

ALTER TABLE NashvilleHousing
ADD PropertyAddressSplit Nvarchar(255); 

UPDATE NashvilleHousing
SET PropertyAddressSplit = SUBSTRING(PropertyAddress, 1, CHARINDEX(',', PropertyAddress) - 1)

ALTER TABLE NashvilleHousing
ADD PropertyAddressCity Nvarchar(255); 

UPDATE NashvilleHousing
SET PropertyAddressCity = SUBSTRING(PropertyAddress, CHARINDEX(',', PropertyAddress) + 1, LEN(PropertyAddress))

Select * from NashvilleHousing
---------------------------------------------------------

-- Breaking Owner Address

Select OwnerAddress From NashvilleHousing


-----------SEPARATING OUT ADDRESS USING 'PARSENAME'-------------
select 
PARSENAME(REPLACE(OwnerAddress,',','.'), 3)
, PARSENAME(REPLACE(OwnerAddress,',','.'), 2)
, PARSENAME(REPLACE(OwnerAddress,',','.'), 1)
From NashvilleHousing

ALTER TABLE NashvilleHousing
ADD OwnerAddressSplit Nvarchar(255); 

UPDATE NashvilleHousing
SET OwnerAddressSplit = PARSENAME(REPLACE(OwnerAddress,',','.'), 3)

ALTER TABLE NashvilleHousing
ADD OwnerCitySplit Nvarchar(255); 

UPDATE NashvilleHousing
SET OwnerCitySplit = PARSENAME(REPLACE(OwnerAddress,',','.'), 2)

ALTER TABLE NashvilleHousing
ADD OwnerStateSplit Nvarchar(255); 

UPDATE NashvilleHousing
SET OwnerStateSplit = PARSENAME(REPLACE(OwnerAddress,',','.'), 1)

select * from NashvilleHousing

-----------------------------------------------------------------------------------

------Changing Y/N to Yes/No in SoldAsVacant using CASE

Select Distinct(SoldAsVacant), COUNT(SoldAsVacant)
From NashvilleHousing
Group by SoldAsVacant
Order by 2    ----2 refers to the col number


select SoldAsVacant
, CASE when SoldAsVacant = 'Y' then 'Yes'
 	   when SoldAsVacant = 'N' then 'No'
	   ELSE SoldAsVacant
	   END
From NashvilleHousing

update NashvilleHousing
set SoldAsVacant = CASE when SoldAsVacant = 'Y' then 'Yes'
 	   when SoldAsVacant = 'N' then 'No'
	   ELSE SoldAsVacant
	   END
from NashvilleHousing

--------------------------------------------------------------------------------

----Remove duplicates

WITH RowNumCTE as(
select * ,
	ROW_NUMBER() OVER (
	PARTITION BY ParcelID,
				 PropertyAddress,
				 SaleDate,
				 SalePrice,
				 LegalReference
				 ORDER BY
					UniqueID
					) row_num
from NashvilleHousing
) 
Select * 
from RowNumCTE
where row_num > 1
order by ParcelID



WITH RowNumCTE as(
select * ,
	ROW_NUMBER() OVER (
	PARTITION BY ParcelID,
				 PropertyAddress,
				 SaleDate,
				 SalePrice,
				 LegalReference
				 ORDER BY
					UniqueID
					) row_num
from NashvilleHousing
)
Delete 
from RowNumCTE
where row_num > 1
--order by ParcelID



-------------DELETING UNUSED COLS
SELECT * FROM NashvilleHousing

ALTER TABLE NashvilleHousing
DROP COLUMN PropertyAddress, OwnerAddress, TaxDistrict

ALTER TABLE NashvilleHousing
DROP COLUMN SaleDate