var arr = [
  {
    "reminder_time": null,
    "begin_reminder_time": "2022-07-20 14:49:23",
    "create_time": "2022-07-20 14:49:45",
    "updator_name": "admin",
    "deal_user_type": "1",
    "tache_code2": "7d4dbf9c-2715-4953-9512-84562864aa22",
    "area_id": "8",
    "tache_code": "cdb94157-8ca7-489f-8b22-3b817136b20f",
    "updator_id": 1,
    "end_teminder_time": "2022-07-20 14:49:23",
    "update_time": "2022-07-20 14:49:45",
    "flow_type": "1",
    "objcet_id": 10078,
    "info_id": 10091,
    "creator_id": 1,
    "creator_name": "admin",
    "reminder_type": "projectTermination_reminder"
  },
  {
    "reminder_time": null,
    "begin_reminder_time": "2022-07-20 14:49:23",
    "create_time": "2022-07-20 14:49:45",
    "updator_name": "admin",
    "deal_user_type": "1",
    "tache_code2": "237462e6-ece8-438a-a7d9-082d94807579",
    "area_id": "8",
    "tache_code": "cdb94157-8ca7-489f-8b22-3b817136b20f",
    "updator_id": 1,
    "end_teminder_time": "2022-07-20 14:49:23",
    "update_time": "2022-07-20 14:49:45",
    "flow_type": "1",
    "objcet_id": 10079,
    "info_id": 10091,
    "creator_id": 1,
    "creator_name": "admin",
    "reminder_type": "projectTermination_reminder"
  }
];

var obj = {};
obj["reminder_time"] = arr[0].reminder_time;
obj["begin_reminder_time"] = arr[0].begin_reminder_time;
obj["create_time"] = arr[0].create_time;
obj["updator_name"] = arr[0].updator_name;
obj["deal_user_type"] = arr[0].deal_user_type;
obj["area_id"] = arr[0].area_id;
obj["tache_code"] = arr[0].tache_code;
obj["updator_id"] = arr[0].updator_id;
obj["end_teminder_time"] = arr[0].end_teminder_time;
obj["update_time"] = arr[0].update_time;
obj["flow_type"] = arr[0].flow_type;
obj["objcet_id"] = arr[0].objcet_id;
obj["info_id"] = arr[0].info_id;
obj["creator_id"] = arr[0].creator_id;
obj["creator_name"] = arr[0].creator_name;
obj["reminder_type"] = arr[0].reminder_type

let a = arr.map((item) => item.tache_code2)
obj['tache_code2'] = a;
console.log(obj);