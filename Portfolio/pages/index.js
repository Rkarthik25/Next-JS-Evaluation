import {Box,Image,Heading,Text,Button, Flex} from "@chakra-ui/react"
import Link from "next/link"



export default function Home({main}) {
  console.log(main)
  return (
    <>
    <Flex>

    <Box h={"500px"} border={"1px solid white"} p={20} w={"500px"} key={main.id}>
        <Image w={"10%"} borderRadius={"50%"} src={main.avatar_url}/>
        <Heading>Karthikeyan Rajan</Heading>
        <p>@{main.login}</p>
        <Text>Full-stack Developer | FOSS | JavaScript | Typescript | NodeJS | Deno | ReactJS | HTML | CSS | Chakra-UI | MUI</Text>
    <Flex gap={"2rem"} >
     <Link href="https://drive.google.com/file/d/15pmW7udvQgX07tpumzartn2_b-mObErK/view?usp=share_link" >
      <Button>Resume</Button>  
     </Link>
      <Button>Follow</Button>
    </Flex>

      <Text>
      1
SDE-1 at Masai School
August 2021 - Present


      </Text>

      <Text>
      2
Senior Software Engineer at Swiggy
November 2020 - September 2021

      </Text>
      <Text>
      3      
Senior Software Engineer at Globant
September 2019 - November 2020
      </Text>
      <Text>
      4
Software Engineer at Confluxsys
      </Text>
      
    </Box>
    </Flex>
    
    
    {/* <Projects/> */}
    </>
  )
}

export async function getServerSideProps(){

  let res=await fetch(`https://api.github.com/users/Rkarthik25`)
   
  let data=await res.json()
  return{
      props:{
          main:data
      }
  }
}
