export interface IInstance {
    id: string,
    instanceAlias: string | null,
    instanceStatus: "ACTIVE" | "CREATION_IN_PROGRESS",
    instanceAccessUrl: string | null,
}
