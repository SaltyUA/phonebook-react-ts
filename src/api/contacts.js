import { instance } from './auth';

export async function getContacts() {
  const { data } = await instance('/contacts');
  return data;
}

export async function postContact(contact) {
  const { data } = await instance.post('/contacts', contact);
  return data;
}

export async function removeContact(id) {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
}

export async function changeContact(id, contact) {
  const { data } = await instance.patch(`/contacts/${id}`, contact);
  return data;
}
