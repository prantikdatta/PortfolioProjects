Attribute VB_Name = "FormatDataMacro"
' ============================================================================
'  Purple Data Formatter  |  FormatDataMacro.bas
'  --------------------------------------------------
'  HOW TO IMPORT:
'    1. Open your Excel workbook (.xlsm).
'    2. Press Alt + F11 to open the VBA Editor.
'    3. In the menu: File > Import File > select this .bas file.
'       (OR: Insert > Module, then paste the code below.)
'    4. Close the VBA Editor.
'    5. On the "Data" sheet, insert a button (Developer > Insert > Button)
'       and assign the macro "FormatDataSheet".
'
'  WHAT IT DOES  (data values are NEVER changed):
'    - Auto-detects the full dataset range
'    - Centers all cells horizontally & vertically
'    - Formats date columns  ->  dd-mmm-yyyy  (e.g. 15-Jan-2024)
'    - Converts data to a structured Excel Table
'    - Applies a purple-themed style with alternating row shading
'    - Adds visible inner + thicker outer borders
'    - Auto-fits + pads column widths for a clean layout
' ============================================================================

Sub FormatDataSheet()

    Dim ws        As Worksheet
    Dim lastRow   As Long
    Dim lastCol   As Long
    Dim dataRange As Range
    Dim tbl       As ListObject
    Dim lo        As ListObject
    Dim colIdx    As Long
    Dim r         As Long
    Dim hasDate   As Boolean
    Dim cellVal   As Variant
    Dim c         As Long

    ' 1. Target the "Data" sheet
    On Error GoTo SheetNotFound
    Set ws = ThisWorkbook.Sheets("Data")
    On Error GoTo 0

    Application.ScreenUpdating = False
    Application.EnableEvents   = False

    ' 2. Auto-detect full dataset range
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    lastCol = ws.Cells(1, ws.Columns.Count).End(xlToLeft).Column

    If lastRow < 2 Or lastCol < 1 Then
        MsgBox "No data found on the Data sheet.", vbExclamation, "Nothing to Format"
        GoTo CleanUp
    End If

    Set dataRange = ws.Range(ws.Cells(1, 1), ws.Cells(lastRow, lastCol))

    ' 3. Remove existing ListObject(s) to avoid conflicts
    For Each lo In ws.ListObjects
        lo.Unlist
    Next lo

    ' 4. Center-align ALL cells (horizontal + vertical)
    With dataRange
        .HorizontalAlignment = xlCenter
        .VerticalAlignment   = xlCenter
        .WrapText            = False
    End With

    ' 5. Detect date columns and apply dd-mmm-yyyy format
	For colIdx = 1 To lastCol
    hasDate = False
    
    For r = 2 To lastRow
        cellVal = ws.Cells(r, colIdx).Value
        
        If Not IsError(cellVal) Then
            If Not IsEmpty(cellVal) Then
                If IsDate(cellVal) Then
                    hasDate = True
                    Exit For
                End If
            End If
        End If
        
    Next r
    
    If hasDate Then
        ws.Range(ws.Cells(2, colIdx), ws.Cells(lastRow, colIdx)).NumberFormat = "dd-mmm-yyyy"
    End If
    
Next colIdx

    ' 6. Convert to a structured Excel Table
    Set tbl = ws.ListObjects.Add( _
        SourceType:=xlSrcRange, _
        Source:=dataRange, _
        xllistobjecthasheaders:=xlYes)
    tbl.Name = "DataTable"

    ' 7. Apply purple table style (TableStyleMedium12 = built-in purple)
    tbl.TableStyle = "TableStyleMedium12"

    ' 8. Re-apply centering after table conversion
    With dataRange
        .HorizontalAlignment = xlCenter
        .VerticalAlignment   = xlCenter
    End With

    ' 9. Style the header row
    With tbl.HeaderRowRange
        .Font.Bold = True
        .Font.Size = 11
        .RowHeight = 24
    End With

    ' 10. Comfortable height for data rows
    If Not tbl.DataBodyRange Is Nothing Then
        tbl.DataBodyRange.RowHeight = 20
    End If

    ' 11. Inner thin borders + thick outer frame
    With dataRange.Borders
        .LineStyle = xlContinuous
        .Weight    = xlThin
        .ColorIndex = xlAutomatic
    End With
    With dataRange.Borders(xlEdgeLeft):   .Weight = xlMedium: End With
    With dataRange.Borders(xlEdgeRight):  .Weight = xlMedium: End With
    With dataRange.Borders(xlEdgeTop):    .Weight = xlMedium: End With
    With dataRange.Borders(xlEdgeBottom): .Weight = xlMedium: End With

    ' 12. Auto-fit columns and add comfortable padding
    dataRange.Columns.AutoFit
    For c = 1 To lastCol
        ws.Columns(c).ColumnWidth = ws.Columns(c).ColumnWidth + 4
    Next c

    MsgBox "Formatting complete! Your purple data table is ready.", _
           vbInformation, "Purple Formatter"
    GoTo CleanUp

SheetNotFound:
    MsgBox "A sheet named 'Data' was not found in this workbook." & vbCrLf & _
           "Please rename your data sheet to 'Data' and try again.", _
           vbCritical, "Sheet Not Found"

CleanUp:
    Application.ScreenUpdating = True
    Application.EnableEvents   = True

End Sub
