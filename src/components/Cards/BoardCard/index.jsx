import { Box, Image, Heading, Text } from "@chakra-ui/react"
import PropTypes from "prop-types" // Import PropTypes
import { TodoCard } from "../TodoCard"

export const BoardCard = ({ headerText, headingColor, boardBg }) => (
  <Box width="100%">
    <Box display="flex" alignItems="center" bg={headingColor} p={4}>
      <Image
        borderRadius="full"
        boxSize="1.5rem"
        src="/images/icons/BsFillSunFill.svg"
        alt="BsFillSunFill"
        mr={2}
      />
      <Heading size="sm" color="white">
        {headerText}
      </Heading>
    </Box>
    <Box
      background={boardBg}
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="start"
      p={6}
    >
      <TodoCard
        title="Tugas 1 : Belajar HTML"
        description="Buat contoh struktur HTML sederhana untuk pembuatan aplikasi web"
      />
      <TodoCard
        title="Tugas 1 : Belajar HTML"
        description="Buat contoh struktur HTML sederhana untuk pembuatan aplikasi web"
      />
    </Box>
    <Box
      background={boardBg}
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p={6}
    >
      <Box display="flex" justifyContent="center">
        <Image
          boxSize="5rem"
          src="/images/icons/update-icon.svg"
          alt="Update Icon"
        />
      </Box>
      <Text align="center" mt={4}>
        Belum ada tugas
      </Text>
      <Text align="center">Segera tambahkan tugas baru kamu sekarang!</Text>
    </Box>
  </Box>
)

// Define PropTypes for your component
BoardCard.propTypes = {
  headerText: PropTypes.string.isRequired, // 'headerText' is required and must be a string
  headingColor: PropTypes.string.isRequired, // 'headingColor' is required and must be a string
  boardBg: PropTypes.string.isRequired, // 'boardBg' is required and must be a string
}
