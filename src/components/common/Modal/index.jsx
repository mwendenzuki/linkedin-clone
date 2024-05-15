import { Modal, Button } from 'antd';
import "./index.scss"

const ModalComponent = 
({
	modalOpen, 
	setModalOpen, 
	status, 
	setStatus, 
	sendStatus
}) => {
  return (
    <>
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
		footer={[
			<Button 
				onClick={sendStatus}
				key="sumbit" 
				type="primary" 
				disabled={status.length > 0 ? false: true}
			>
				Post
			</Button>
		]}
		>
        <input
			className="modal-input"
			value={status}
			onChange={(event) => setStatus(event.target.value)}
			placeholder="What do you want to talk about?"
		/>
      </Modal>
    </>
  );
};
export default ModalComponent;