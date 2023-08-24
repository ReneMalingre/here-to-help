import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  Textarea,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';

const ContactForm = () => {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 600px)');

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    trigger,
  } = useForm({ mode: 'onChange' });

  // Chakra UI's toast component for showing success/error messages
  const toast = useToast();

  // Handle form submission
  const onSubmit = async values => {
    // Destructure the name, email and message fields from the values object
    const { name, email, message } = values;
    // validation, if any of the fields are empty, show an error toast message
    // although useForm should prevent this from happening
    if (!name || !email || !message) {
      let status = 'error';
      let bgColor = status === 'error' ? 'red.500' : 'lightGray.500';
      let textColor = 'spaceGray.500';
      let title = 'Form Submission Error';
      let description =
        'Please correct the errors in the form before submitting.';
      toast({
        title,
        description,
        status,
        duration: 5000,
        isClosable: true,
        position: 'top',
        render: () => (
          <Box
            color={textColor}
            p={3}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="dark-lg"
          >
            <Text fontWeight="bold">{title}</Text>
            <Text>{description}</Text>
          </Box>
        ),
      });
      return;
    }

    // Create a mailto link with the values from the contact form
    const mailtoLink = `mailto:rene.malingre@gmail.com?subject=${encodeURIComponent(
      'Contact Form Submission From ' + name
    )}&body=${encodeURIComponent(
      `Sender Name: ${name}\nSender Email: ${email}\nMessage: ${message}`
    )}`;
    // Open the mailto link in a new window
    window.open(mailtoLink);

    // Show a success toast message via Chakra UI's useToast component
    let status = 'success';
    let bgColor = status === 'error' ? 'red.500' : 'lightGray.500';
    let textColor = 'spaceGray.500';
    let title = 'Form submitted';
    let description = 'Your contact form has been successfully submitted';

    toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
      position: 'top',
      render: () => (
        <Box
          color={textColor}
          p={3}
          bg={bgColor}
          borderRadius="lg"
          boxShadow="dark-lg"
        >
          <Text fontWeight="bold">{title}</Text>
          <Text>{description}</Text>
        </Box>
      ),
    });
    reset();
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      w="100%"
      px={isNotSmallScreen ? 7 : 0}
    >
      <FormControl id="name" isInvalid={errors.name}>
        <FormLabel>Your Name:</FormLabel>
        <Input
          w={isNotSmallScreen ? '50%' : '100%'}
          backgroundColor="mutedCyan.500"
          color="spaceGray.500"
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
        <FormLabel>Your Email:</FormLabel>
        <Input
          w={isNotSmallScreen ? '50%' : '100%'}
          backgroundColor="mutedCyan.500"
          color="spaceGray.500"
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
        <FormLabel>Message:</FormLabel>
        <Textarea
          w={isNotSmallScreen ? '75%' : '100%'}
          backgroundColor="mutedCyan.500"
          color="spaceGray.500"
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
        backgroundColor="deepCyan.500"
        color="spaceGray.500"
        mt={6}
        _hover={{ backgroundColor: 'deepCyan.600' }}
      >
        Submit
      </Button>
    </Box>
  );
};
export default ContactForm;
