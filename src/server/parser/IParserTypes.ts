
export interface IWriteBenchmarkData extends IRdfConfigData{
    data: string;
    environment: string;
    entitiesCreated: number;
    entityType: string;
    rdfEntityType: string;
    timeToComplete: number;
    timeToWrite: number;
    timeToCommit: number;
    timeToGetNumTriples: number;
    triplesPerEntity: number;
    triplesPerTotalSecond: number;
    triplesPerWriteSecond: number;
    totalTriplesCreated: number;
    startTime: number;
    endTime: number;
    percentageOfTimeWriting: number;
    percentageOfTimeValidating: number;
    percentageOfTimeGettingNumberOfTriples: number;
    numberOfTriplesInRdfPriorToWriting: number;
}

interface IRdfConfigData {
    driver: string;
    activeGraph: string;
    user: string;
    role: string;
    tenant: string;
    verbose: string;
    resultFirst: string;
    profiler: string;
    validation: string;
    entailment: string;
    language: string;
    transactionDepth: string;
    pushDepth: string;
    cwd:string;
}
