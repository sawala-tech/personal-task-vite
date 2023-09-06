import PropTypes from "prop-types" // Import PropTypes
import { useState } from "react"
import {
  Button,
  Input,
  Textarea,
  Select,
  Stack,
  HStack,
  Card,
  Heading,
  Text,
} from "@chakra-ui/react"
import { ModalComponent } from "../../Modal"

export const TodoCard = ({ title, description }) => {
  const [openModal, setOpenModal] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleOpenConfirm = () => {
    setShowConfirm(true)
  }
  return (
    <Card width="100%" p={4}>
      <Heading as="h1" size="sm">
        {title}
      </Heading>
      <Text mt={3}>{description}</Text>
      <HStack spacing=".5rem">
        <Text color="red" cursor="pointer" onClick={handleOpenConfirm}>
          Hapus
        </Text>
        <Text>|</Text>
        <Text color="blue" cursor="pointer" onClick={handleOpenModal}>
          Edit
        </Text>
      </HStack>
      <ModalComponent
        title="Tugas baru"
        openModal={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Stack spacing={3}>
          <HStack spacing="24px">
            <Text w={"35%"} fontWeight={600}>
              Nama Tugas
            </Text>
            <Input placeholder="Tugas 1 : Belajar HTML" />
          </HStack>
          <HStack spacing="24px">
            <Text w={"35%"} fontWeight={600}>
              Deskripsi
            </Text>
            <Textarea placeholder="Buat contoh struktur HTML sederhana untuk pembuatan aplikasi web" />
          </HStack>
          <HStack spacing="24px">
            <Text w={"35%"} fontWeight={600}>
              Status
            </Text>
            <Select>
              <option value="option1">Open</option>
              <option value="option2">In progress</option>
              <option value="option3">Done</option>
            </Select>
          </HStack>
        </Stack>
        <Button colorScheme="blue" mt={4}>
          Simpan
        </Button>
      </ModalComponent>

      <ModalComponent
        title=""
        openModal={showConfirm}
        onClose={() => setShowConfirm(false)}
      >
        <Text>Apakah anda yakin ingin menghapus data ini?</Text>
        <HStack spacing="1rem" justifyContent="end">
          <Button
            colorScheme="red"
            mt={4}
            onClick={() => setShowConfirm(false)}
          >
            Batal
          </Button>
          <Button colorScheme="blue" mt={4}>
            Ya
          </Button>
        </HStack>
      </ModalComponent>
    </Card>
  )
}

// Define PropTypes for your component
TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
