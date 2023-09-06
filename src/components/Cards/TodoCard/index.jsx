import { Box, Card, Heading, Text } from "@chakra-ui/react"
import PropTypes from "prop-types" // Import PropTypes

export const TodoCard = ({ title, description }) => (
  <Card width="100%" p={4} mt={4}>
    <Heading as="h1" size="sm">
      {title}
    </Heading>
    <Text mt={3}>{description}</Text>
    <Box display="flex">
      <Text color="red" mr={2} cursor="pointer">
        Hapus
      </Text>
      <Text mr={2}>|</Text>
      <Text color="blue" cursor="pointer">
        Edit
      </Text>
    </Box>
  </Card>
)

// Define PropTypes for your component
TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
