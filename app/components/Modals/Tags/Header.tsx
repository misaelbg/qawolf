import { copy } from "../../../theme/copy";
import ModalHeader from "../../shared/Modal/Header";
import Text from "../../shared/Text";

type Props = {
  closeModal: () => void;
  testCount: number;
};

export default function Header({ closeModal, testCount }: Props): JSX.Element {
  return (
    <>
      <ModalHeader
        closeModal={closeModal}
        label={copy.editTagsForTests(testCount)}
      />
      <Text
        color="gray8"
        margin={{ bottom: "medium", top: "xxsmall" }}
        size="componentParagraph"
      >
        {testCount ? copy.editTagsDetail : copy.editTagsDetailNoTests}
      </Text>
    </>
  );
}
