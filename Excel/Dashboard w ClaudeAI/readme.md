# Data Cleaning

1. Targets the **"Data" worksheet** and validates its existence
2. Auto-detects the **full data range** (last row & column)
3. Removes any **existing Excel tables (ListObjects)**
4. Applies **center alignment** (horizontal + vertical) to all cells
5. Detects **date columns** and formats them as `dd-mmm-yyyy`
6. Converts the range into a **structured Excel Table** with a purple style
7. Applies **final formatting** (headers, row height, borders, auto-fit, padding)

# Automatically building all your analysis layer (**Pivot sheet**) from raw data 

1. Builds all PivotTables automatically from the `Data` sheet
2. Uses one PivotCache for efficiency
3. Creates multiple analyses (segment, trend, monthly, category, region, discount, quantity, top orders)
4. Arranges pivots in a clean, non-overlapping grid layout
5. Adds titles and formatting for readability
6. Clears old pivots to avoid duplication
7. Acts as the data engine feeding the dashboard

# Dashboard Automation

1. Creates or accesses the `Dashboard` sheet
2. Clears old content, charts, and shapes for a clean rebuild
3. Sets a structured layout (grid, spacing, background)
4. Builds a header banner with title and styling
5. Generates KPI cards using Pivot data
6. Creates multiple charts in a fixed grid layout
7. Applies consistent purple theme and formatting
8. Ensures no overlapping visuals
9. Rebuilds the entire dashboard from scratch each run

---

# Refresh All Pivots

1. Loops through all worksheets
2. Refreshes every PivotTable in the workbook
3. Ensures latest data is reflected in pivots
4. Acts as a quick refresh utility for updates


