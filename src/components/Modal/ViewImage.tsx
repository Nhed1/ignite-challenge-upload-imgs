import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent maxW={900} maxH={600} mx="auto" w="auto" h="auto">
        <ModalBody>
          <Image src={imgUrl} />
        </ModalBody>
      </ModalContent>
      <ModalFooter bg="pGray.800" px="20px" borderBottomRadius="5px">
        <Link href={imgUrl} isExternal fontSize="1rem" mr="auto">
          Abrir original
        </Link>
      </ModalFooter>
    </Modal>
  );
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
}
