<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  
  export const load: Load = ({ session }) => {
    console.log("Load====>",session.user);
      if(!session.user){
          return {
              status: 302,
              redirect: '/auth/login',
          }
      }

      return {
          status: 200,
          props: {
              user_email: session.user.email,
          },
      }
  }
</script>