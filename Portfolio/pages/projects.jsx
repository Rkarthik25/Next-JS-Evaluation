import {FaRegStar,FaRegFolder} from "react-icons/fa"
import {BiGitRepoForked} from "react-icons/bi"
import { Box,Heading,Text,Grid,GridItem } from "@chakra-ui/react"
const Projects=({proj})=>{
    console.log(proj.items)
return(
<>
    <Box  >
    <Grid templateColumns='repeat(5, 1fr)' gap={5}>
  <GridItem colSpan={2} h='10' bg='tomato' />
  <GridItem colStart={4} colEnd={6} h='10' bg='grey' />
</Grid>
        {proj.items.map((el)=>(
             
             
           
            <Box border={"1px solid red"} width={"100%"} key={el.id}>
                
                   <Heading ><FaRegFolder/>{el.full_name}</Heading>
                   <Text><FaRegStar /> {el.forks_count}</Text>
                   <Text><BiGitRepoForked /> {el.forks}</Text>
                   <Text>{el.language}</Text>
                  
            </Box>
            
      
        ))}
      
        </Box>
        </>
)

}

export default Projects



export async function getServerSideProps(){

    let res=await fetch(`https://api.github.com/search/repositories?q=user:Rkarthik25+fork:true&sort=updated&per_page=10&type=Repositories`)
     
    let data=await res.json()
    return{
        props:{
            proj:data
        }
    }
}