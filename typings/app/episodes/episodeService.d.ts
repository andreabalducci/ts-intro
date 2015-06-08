/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../app.d.ts" />
declare module swdb.services {
    interface IEpisodeService {
        getList: (successFn: (r: swdb.Episode[]) => void) => void;
        get: (id: string, successFn: (r: Episode[]) => void) => void;
    }
}
