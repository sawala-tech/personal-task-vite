import { useState } from "react";
import { ModalComponent } from "../Modal";
import { AddIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer, Image, Button, HStack, Text, Stack, Input, Textarea, Select } from "@chakra-ui/react";

export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Flex paddingX={6} paddingY={4}>
        <Box>
          <Image
            w={220}
            h="auto"
            src="/static/images/logo.png"
            alt="Update Icon"
          />
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme='blue' onClick={handleOpenModal}>
            <HStack spacing={2}>
              <AddIcon />
              <Text>
                Tambah Tugas
              </Text>
            </HStack>
          </Button>
        </Box>
      </Flex >
      <ModalComponent title="Tugas baru" openModal={openModal} onClose={() => setOpenModal(false)}>
        <Stack spacing={3}>
          <HStack spacing='24px'>
            <Text w='35%' fontWeight={600}>Nama Tugas</Text>
            <Input placeholder='Tugas 1 : Belajar HTML' />
          </HStack>
          <HStack spacing='24px'>
            <Text w='35%' fontWeight={600}>Deskripsi</Text>
            <Textarea placeholder='Buat contoh struktur HTML sederhana untuk pembuatan aplikasi web' />
          </HStack>
          <HStack spacing='24px'>
            <Text w='35%' fontWeight={600}>Status</Text>
            <Select>
              <option value='option1'>Open</option>
              <option value='option2'>In progress</option>
              <option value='option3'>Done</option>
            </Select>
          </HStack>
        </Stack>
        <Button colorScheme='blue' mt={4}>Simpan</Button>
      </ModalComponent>
    </>
  )
} 
