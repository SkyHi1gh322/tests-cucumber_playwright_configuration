<script lang="ts">
import router from "@/router";
import {ref} from "vue";

const r = router;

const loopEntity = <T>(entity: T, exclude: ReadonlyArray<keyof T>) => {
  const newEntity: T = {} as unknown as T;
  // we need to use exclude only in case if you don't need to handle all fields in target object.
  if(exclude && exclude.length){
    for(let key in entity){
      if(exclude.includes(key)){
        continue;
      }
      newEntity[key] = entity[key];
    }

    return newEntity
  }
  else{
   return entity;
  }
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

const someReactiveValue = ref('test');
console.log(filterEntity(mock, (v) => v !== ''));

// use loopEntity if you need to remove some fields from the object, i.e in this case we don't want to handle message key;
console.log(filterEntity(loopEntity(mock, ['message']), (v) => v.toString().toLowerCase().includes(someReactiveValue.value)))


</script>
<template>
    <div>
        <RouterView />
    </div>
</template>
<style>

</style>
