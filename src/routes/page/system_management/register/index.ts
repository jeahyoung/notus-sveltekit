import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler =async ({ locals, params, request, url }) => {
    const userSearch = url.searchParams.get('userSearch');
    //console.log("formData==>",await request.formData());
   
    //const formData = await request.formData();
    //console.log("formData==>",formData);

    const sql = locals.connection?.sql;
    
    const result = await sql`select id,
                                "createAt",
                                "updateAt",
                                email,
                                password
                            from "user"
                            where email like ${userSearch + '%'}`;

    console.log('result===',result);

    return {
        body: { 
            success: 'Success',
            data: result
        }
    };
}