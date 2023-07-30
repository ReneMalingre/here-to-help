import React from 'react';
import '../../index.css';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react';

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    trigger,
  } = useForm({mode: 'onChange'});
  // Chakra UI's toast component for showing success/error messages
  const toast = useToast();

  // Handle form submission
  const onSubmit = async values => {
    // Destructure the name, email and message fields from the values object
    const { name, email, message } = values;
    // validation, if any of the fields are empty, show an error toast message
    // although useForm should prevent this from happening
    if (!name || !email || !message) {
      toast({
        title: "Form Submission Error",
        description: "Please correct the errors in the form before submitting.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Create a mailto link with the values from the contact form
    const mailtoLink = `mailto:support@yourwebsite.com?subject=Contact Form Submission From ${name}&body=Email: ${email}%0D%0A Message: ${message}`;
    // Open the mailto link in a new window
    window.open(mailtoLink);
    console.log(values);
    // Show a success toast message via Chakra UI's useToast component
    toast({
      title: 'Form submitted',
      description: 'Your contact form has been successfully submitted',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    // Reset the contact form after submission
    reset();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="name" isInvalid={errors.name}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          {...register('name', { required: 'Please enter your name' })}
          // onBlur is used to trigger validation on loss of focus
          onBlur={() => trigger('name')}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl id="email" isInvalid={errors.email} mt={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          {...register('email', {
            required: 'Please enter your email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address',
            },
          })}
          onBlur={() => trigger('email')}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl id="message" isInvalid={errors.message} mt={4}>
        <FormLabel>Message</FormLabel>
        <Textarea
          {...register('message', { required: 'Please enter a message' })}
          onBlur={() => trigger('message')}
        />
        <FormErrorMessage>
          {errors.message && errors.message.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        isLoading={errors.isSubmitting}
        type="submit"
        colorScheme="blue"
        mt={4}
      >
        Submit
      </Button>
    </Box>
  );
};
export default ContactForm;
