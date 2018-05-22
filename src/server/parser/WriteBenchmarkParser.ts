import {IWriteBenchmarkData, WriteBenchMarkColumn} from "./IParserTypes";

import fs = require("fs");
import readline = require("readline");
import stream = require("stream");


const WRITE_CSV_PATH = "../../sampleData/write.csv";



export function parseWriteCSVLine(csvLine: string): IWriteBenchmarkData {
    const tokens = csvLine.split(",");

    return {
        date: tokens[WriteBenchMarkColumn.Date],
        environment: tokens[WriteBenchMarkColumn.Environment],
        entitiesCreated: parseInt(tokens[WriteBenchMarkColumn.EntitiesCreated], 10),
        entityType: tokens[WriteBenchMarkColumn.EntityType],
        rdfEntityType: tokens[WriteBenchMarkColumn.RDFEntityType],
        timeToComplete: parseInt(tokens[WriteBenchMarkColumn.TimeToComplete], 10),
        timeToWrite: parseInt(tokens[WriteBenchMarkColumn.TimeToWrite], 10),
        timeToCommit: parseInt(tokens[WriteBenchMarkColumn.TimeToCommit], 10),
        timeToGetNumTriples: parseInt(tokens[WriteBenchMarkColumn.TimeToGetNumTriples], 10),
        triplesPerEntity: parseInt(tokens[WriteBenchMarkColumn.TriplesPerEntity], 10),
        triplesPerTotalSecond: parseInt(tokens[WriteBenchMarkColumn.TriplesPerTotalSecond], 10),
        triplesPerWriteSecond: parseInt(tokens[WriteBenchMarkColumn.TriplesPerWriteSecond], 10),
        totalTriplesCreated: parseInt(tokens[WriteBenchMarkColumn.TotalTriplesCreated], 10),
        startTime: parseInt(tokens[WriteBenchMarkColumn.StartTime], 10),
        endTime: parseInt(tokens[WriteBenchMarkColumn.EndTime],10 ),
        percentageOfTimeWriting: tokens[WriteBenchMarkColumn.PercentageOfTimeWriting],
        percentageOfTimeValidating: tokens[WriteBenchMarkColumn.PercentageOfTimeValidating],
        percentageOfTimeGettingNumberOfTriples: tokens[WriteBenchMarkColumn.PercentageOfTimeGettingNumberOfTriples],
        numberOfTriplesInRdfPriorToWriting: parseInt(tokens[WriteBenchMarkColumn.NumberOfTriplesInRDFPriorToWriting], 10),
        driver: tokens[WriteBenchMarkColumn.Driver],
        activeGraph: tokens[WriteBenchMarkColumn.ActiveGraph],
        user: tokens[WriteBenchMarkColumn.User],
        role: tokens[WriteBenchMarkColumn.Role],
        tenant: tokens[WriteBenchMarkColumn.Tenant],
        verbose: tokens[WriteBenchMarkColumn.Verbose],
        resultFirst: tokens[WriteBenchMarkColumn.ResultFirst],
        profiler: tokens[WriteBenchMarkColumn.Profiler],
        validation: tokens[WriteBenchMarkColumn.Validation],
        entailment: tokens[WriteBenchMarkColumn.Entailment],
        language: tokens[WriteBenchMarkColumn.Language],
        transactionDepth: tokens[WriteBenchMarkColumn.TransactionDepth],
        pushDepth: tokens[WriteBenchMarkColumn.PushDepth],
        cwd: tokens[WriteBenchMarkColumn.CWD]
    };
}

export async function parseWriteCSVFile(filePath: string): Promise<IWriteBenchmarkData[]> {
    return new Promise<IWriteBenchmarkData[]>((resolve, reject) => {

        fs.stat(filePath, (error, stat) => {

            if(error) {
                reject(error);
                return;
            }

            if(!stat.isFile()) {
                reject(`ERROR: NOT A FILE: ${filePath}`);
                return;
            } else {

                const fileSize = stat.size;
                let currentSize = 0;

                let inStream = fs.createReadStream(filePath, {encoding: "utf-8"});
                let lineReader = readline.createInterface({input: inStream});

                lineReader.on('line', (line: string) => {

                });

                lineReader.on('end', ()=> {

                });
            }
        })

    })
}

