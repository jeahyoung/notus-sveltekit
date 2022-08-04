import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler =async ({ locals, params, request, url }) => {
    const userSearch = url.searchParams.get('userSearch');
    //console.log("formData==>",await request.formData());
   
    //const formData = await request.formData();
    //console.log("formData==>",formData);
   

    const sql = locals.connection?.sql;
    console.log('userSearch==========',userSearch);
    const result = await sql`select id,
                                "createAt",
                                "updateAt",
                                email,
                                password
                            from "user"
                            where 1=1 ${userSearch ? sql`and email like ${userSearch + '%'}` : sql``}`;

    console.log('result===',result);

    return {
        body: { 
            success: 'Success',
            data: result
        }
    };
}