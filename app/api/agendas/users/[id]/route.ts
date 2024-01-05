//path to this file: /api/agendas/users/[id]/route.ts

import joi from 'joi';

import { agendaOperations } from '@/app/_helpers/server';
import { apiHandler } from '@/app/_helpers/server/api';

module.exports = apiHandler({
  GET: getByUserId,
});

async function getByUserId(req: Request, { params: { id } }: any) {
    // Sample data resembling the MongoDB document structure
    const sampleData = [{
      _id: { $oid: "6596988e02c8c2952645bafd" },
      name: "Agenda",
      ownerId: { $oid: "6596988402c8c2952645bafa" },
      participants: [{ $oid: "6596988402c8c2952645bafa" }, { $oid: "6596988402c8c295264Tarfb" }],
      appointments: [],
      __v: 0
  },
  {
    _id: { $oid: "6536988e02c8c2952645bafd" },
    name: "Agenda2",
    ownerId: { $oid: "6596988402c8c2952645bafa" },
    participants: [{ $oid: "6596988402c8c2952645bafa" }, { $oid: "6596988402c8c295264Tarfb" }],
    appointments: [],
    __v: 0
}
];

  // Replace this with the actual data retrieval logic from your repository
  // For now, returning the sample data
  return { userAgendas: sampleData };
  
  // try{
  //  return await agendaOperations.getByUserId(id);
  // }catch (e){
  //   throw `error trying to fetch agendas:\n${e}`;
  // }
  
}

// const getByUserIdSchema = joi.object({
//   id: joi.string().required(),
// });

// getByUserId.schema = getByUserIdSchema;
