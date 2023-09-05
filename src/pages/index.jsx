import { useState } from "react";
import { ModalComponent } from "../components/Modal";
import { Button, Input, Textarea, Select, Stack, HStack, Text } from "@chakra-ui/react";

const LandingPage = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    return (
        <>
            <Button onClick={handleOpenModal}>Tambah Tugas</Button>
            <ModalComponent title="Tugas baru" openModal={openModal} onClose={() => setOpenModal(false)}>
                <Stack spacing={3}>
                    <HStack spacing='24px'>
                        <Text w={'35%'} fontWeight={600}>Nama Tugas</Text>
                        <Input placeholder='Tugas 1 : Belajar HTML' />
                    </HStack>
                    <HStack spacing='24px'>
                        <Text w={'35%'} fontWeight={600}>Deskripsi</Text>
                        <Textarea placeholder='Buat contoh struktur HTML sederhana untuk pembuatan aplikasi web' />
                    </HStack>
                    <HStack spacing='24px'>
                        <Text w={'35%'} fontWeight={600}>Status</Text>
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
    );
}

export default LandingPage;
