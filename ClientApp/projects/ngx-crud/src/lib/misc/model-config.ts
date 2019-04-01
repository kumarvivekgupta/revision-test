export class ModelConfig {
    type: any;
    tableName: string;
    key: string;
    /** If empty then @tableName will be used with some prefix.*/
    cacheKey: string;
    /**
     * This will be used as default rest url if it is set, otherwise _modelName will be used.
     */
    _controller: string;

    public get id(): string {
        return this[this.key];
    }
    public get CacheKey(): string {
        return this.cacheKey || this.tableName;
    }
}
