import * as XLSX from 'xlsx';  // Import the xlsx library to read Excel files
import { promises as fs } from 'fs';  // Use the fs.promises API for asynchronous file reading

/**
 * Asynchronous utility function to read an Excel file and get data for a test case with a unique identifier.
 * @param filePath - Path to the Excel file
 * @param sheetName - Name of the sheet to extract data from
 * @param identifier - The unique identifier to find the test case
 * @param identifierColumn - The column to search for the unique identifier (0-based index)
 * @returns - A promise that resolves to an array representing the data from the row containing the test case
 */
export async function getTestCaseDataByIdentifier(
  filePath: string,
  sheetName: string,
  identifier: string,
  identifierColumn: number = 0 // Default to searching in the first column
): Promise<any[] | null> {
  try {
    // Asynchronously read the Excel file
    const fileBuffer = await fs.readFile(filePath);
    
    // Read the workbook from the buffer
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
    
    // Get the sheet by name
    const sheet = workbook.Sheets[sheetName];
    
    if (!sheet) {
      throw new Error(`Sheet with name ${sheetName} not found in the Excel file.`);
    }

    // Convert the sheet to a 2D array (rows and columns)
    const data: any[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 });  // `header: 1` means treat the first row as column headers

    // Search for the row with the matching identifier in the specified column
    for (const row of data) {
      if (row[identifierColumn] === identifier) {
        return row; // Return the entire row that contains the test case
      }
    }

    // If the identifier is not found, return null
    return null;
  } catch (error: unknown) {  // explicitly type the error as 'unknown'
    if (error instanceof Error) {  // Check if it's an instance of Error
      console.error('Error reading or parsing Excel file:', error.message);
    } else {
      console.error('An unknown error occurred');
    }
    throw error;  // rethrow the error after logging
  }
}
