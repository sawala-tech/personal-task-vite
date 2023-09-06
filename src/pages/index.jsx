import { Grid } from "@chakra-ui/react"
import { BoardCard } from "../components/Cards"
import { Navbar } from "../components/Navbar"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Grid templateColumns="repeat(3, 1fr)">
        <BoardCard headerText="Open" headingColor="#38B2AC" boardBg="#ebf8ff" />
        <BoardCard headerText="In Progress" headingColor="#4299E1" />
        <BoardCard headerText="Done" headingColor="#9F7AEA" BoardBg="#ebf8ff" />
      </Grid>
    </>
  )
}

export default LandingPage
