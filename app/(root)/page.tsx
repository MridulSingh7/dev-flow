import ROUTES from "@/constants/routes";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Home = async () => {
  const session = await auth();
  console.log(session); // server log

  return (
    <>
      <h1 className="h1-bold">Welcome to the world of NextJS</h1>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
};

export default Home;
