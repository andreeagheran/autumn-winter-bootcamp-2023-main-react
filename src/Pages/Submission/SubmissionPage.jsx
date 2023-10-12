import { PageTitle } from "../Form/style";
import { SubTitle, SubmissionContainer, SubmissionDetails, SubmissionField } from "./style";

const SubmissionPage = () => {
  const dataObject = JSON.parse(localStorage.getItem('formData'));
  const address = dataObject.addr2 ? `${dataObject.addr1}, ${dataObject.addr2}` : dataObject.addr1;
  return (
    <SubmissionContainer>
      <PageTitle>Excellent!</PageTitle>
      <PageTitle>See you in November 2023!</PageTitle>
      <SubTitle>Submission Summary:</SubTitle>
      <SubmissionDetails>
        <SubmissionField>First name: {dataObject.firstName}</SubmissionField>
        <SubmissionField>Last name: {dataObject.lastName}</SubmissionField>
        <SubmissionField>Phone number: {dataObject.phone}</SubmissionField>
        <SubmissionField>Email: {dataObject.email}</SubmissionField>
        <SubmissionField>Address: {address}</SubmissionField>
        <SubmissionField>Country: {dataObject.country}</SubmissionField>
        <SubmissionField>State: {dataObject.state || 'none'}</SubmissionField>
        <SubmissionField>City: {dataObject.city}</SubmissionField>
      </SubmissionDetails>
    </SubmissionContainer>
  )
}

export default SubmissionPage;