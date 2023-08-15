import React from 'react';

import { act } from '@testing-library/react-native';
import {
    cleanup,
    fireEvent,
    render,
    screen,
} from '@testing-library/react-native';
import Form from '../Validator/Form';
import { it, jest, expect } from '@jest/globals';



it('Kiểm tra xem nếu xuất hiện lỗi', async() => {
    const fullname = 'Vy Tran';
    const password = 'Vy12012002@';
    const email = 'vy@gmail.com';
    
    const handleSubmit = jest.fn();
    // Render the component
    render(<Form  />);
  
        await fireEvent.changeText(
            screen.getByPlaceholderText(/John Smith/i),
            fullname,
          );
           await fireEvent.changeText(
            screen.getByPlaceholderText(/hanh021296/i),
            password,
          );
          
           await fireEvent.changeText(
              screen.getByPlaceholderText(/example@email.com/i),
              email,
            );
            await fireEvent.press(screen.getByTestId("addDataButton"));
     
     
            expect(handleSubmit).toHaveBeenCalledWith({
              password, fullname,email
            });
            
    // Verify that handleSubmit was called with the correct arguments and only once
  //expect(handleSubmit).toHaveBeenCalledWith({password, fullname,email});
  
    const dateError = screen.queryByTestId('dateError');
    expect(dateError).toBeNull();
     
  });


  