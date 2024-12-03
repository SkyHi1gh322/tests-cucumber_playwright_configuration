const loopEntity = <T>(entity: T, exclude?: string[]) => {
    const newEntity: T = {} as unknown as T;

    for(let key in entity){
      if(exclude.includes(key)){
        continue;
      }
      newEntity[key] = entity[key];
    }

    return newEntity
}


type FilterEntityProps<T, K> = {
  [K in keyof T]: T[K];
}

const filterEntity = <T, K>(entity: T, callback: (key: T[Extract<keyof T, string>]) => boolean ) => {
    const result = {} as unknown as Record<keyof T, boolean>;
      for(let key in entity){
        result[key] = callback(entity[key])
      }


      return result;
}

const mock = {
  id: 0,
  timestamp: 2903840923,
  eventType: 'TEST',
  message: 'test message',
  triggerer: 'trigger',
  objectId: 123

}

filterEntity(loopEntity(mock), (v) => v.toString().toLowerCase().includes('test'));
