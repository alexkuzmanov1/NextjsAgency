
import {  Main } from "../sections";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const mainProps = {
    title: "Managed agency selection",
    description: "Strengthen your onboarding progress",
    cardProps:[
      {
        image: {src:"/img/design.png", alt:"",width:75,height:75},
        title: "Brief",
        description: "Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered.",
      },
      {
        image: {src:"/img/design.png", alt:"",width:75,height:75},
        title: "Search",
        description: "In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due-dilligence vetting.",
      },
      {
        image: {src:"/img/design.png", alt:"",width:75,height:75},
        title: "Pitch",
        description: "Comprehensive <strong>pitch management</strong>, including comms, diary managment and pitch hosting.",
      }
    ]
  }


  export default function showMainPage(){
    return(
        <>
        
          <UserButton />
      <Main {...mainProps} />
      </>
    )
  }

