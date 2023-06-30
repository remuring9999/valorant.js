declare class Valorant {
    public static search (query: string): Promise<any>;
    public static get (puuid: string): Promise<any>;
}

export = Valorant;