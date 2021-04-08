<script>
import {
    Row, 
    Container,
    Col,
   Button,
   Modal,
   ModalBody,
   ModalFooter,
   ModalHeader
 } from '../sveltestrap';
 let open = false;
 const toggle = () => (open = !open);

 export let title = "TITLE";
 export let iconName = "house-user"
 export let content = ""
 $: fullIconName = `fa-${iconName}`;
</script>
<style>
.circle-icon {
   background: #6bccff;;
   padding:30px;
   border-radius: 50%;
}

.info-icon {
   cursor: pointer;
}
.outer-grid {
    display:grid;
    grid-template-rows: 1fr auto;
    justify-items: center;
}
</style>

<div class="outer-grid">
<div class="info-icon" on:click={toggle}>
    <i class="fas {fullIconName} fa-10x circle-icon"></i>
</div>
<div>
    <h2>{title}</h2>
</div>
</div>

<Modal isOpen={open} {toggle}>
    <ModalHeader {toggle}> {title}</ModalHeader>
    <ModalBody>
    {@html content}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={toggle}>OK</Button>
    </ModalFooter>
  </Modal>