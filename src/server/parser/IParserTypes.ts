
export interface IWriteBenchmarkData extends IRdfConfigData{
    date: string;
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
    percentageOfTimeWriting: string;
    percentageOfTimeValidating: string;
    percentageOfTimeGettingNumberOfTriples: string;
    numberOfTriplesInRdfPriorToWriting: number;
}

export enum WriteBenchMarkColumn {
    Date,
    Environment,
    EntitiesCreated,
    EntityType,
    RDFEntityType,
    TimeToComplete,
    TimeToWrite,
    TimeToCommit,
    TimeToGetNumTriples,
    TriplesPerEntity,
    TriplesPerTotalSecond,
    TriplesPerWriteSecond,
    TotalTriplesCreated,
    StartTime,
    EndTime,
    PercentageOfTimeWriting,
    PercentageOfTimeValidating,
    PercentageOfTimeGettingNumberOfTriples,
    NumberOfTriplesInRDFPriorToWriting,
    Driver,
    ActiveGraph,
    User,
    Role,
    Tenant,
    Verbose,
    ResultFirst,
    Profiler,
    Validation,
    Entailment,
    Language,
    TransactionDepth,
    PushDepth,
    CWD
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
