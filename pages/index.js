import { Hero } from "../sections";
import { useRouter } from "next/router";
import { StyledSignInButton } from "../components/StyledSignInButton/elements";
import { StyledUserButton } from "../components/StyledUserButton/elements";
import {
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { useUser } from "@clerk/nextjs";
import Head from "next/head";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};



export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  
  const handleButtonClick = () => {

    if (user) {
      router.push("/main");
    } else {
      router.push("https://flowing-weasel-84.accounts.dev/sign-in");
    }
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <SignedOut>
          <StyledSignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      {<Hero {...heroProps} onButtonClick={handleButtonClick} />}
      </>
  );
}
