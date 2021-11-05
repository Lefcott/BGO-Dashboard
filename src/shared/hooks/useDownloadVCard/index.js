import VCard from 'vcard-creator';

const useDownloadVCard = () => ({
  name,
  surname,
  phone,
  company,
  job_title,
  email,
  phone_numbers,
  url
} = {}) => {
  const vCard = new VCard();
  vCard.addName(name, surname).addPhoneNumber(phone);
  if (company) vCard.addCompany(company);
  if (job_title) vCard.addJobtitle(job_title);
  if (email) vCard.addEmail(email);
  if (phone_numbers) phone_numbers.forEach(phone_number => vCard.addPhoneNumber(phone_number));
  if (url) vCard.addURL(url);

  // TODO continue
  vCard.addAddress('value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7');

  const cardContent = window.btoa(vCard.toString());
  const fileName = `${name}${surname ? `-${surname}` : ''}`;
  const a = document.createElement('a');
  a.download = `${fileName}.vcf`;
  a.textContent = fileName;
  a.href = `data:text/vcard;base64,${cardContent}`;
  a.click();
};

export default useDownloadVCard;
