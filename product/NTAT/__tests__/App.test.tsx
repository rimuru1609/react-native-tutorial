import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';
import { it } from '@jest/globals';

describe('App', () => {
  it('should pick a color', async () => {
    const { getByText, getByTestId } = render(<App />);

    const hueSlider = getByTestId('hue-slider');
    fireEvent(hueSlider, 'onValueChange', 30);

    const saturationSlider = getByTestId('saturation-slider');
    fireEvent(saturationSlider, 'onValueChange', 50);

    const lightnessSlider = getByTestId('lightness-slider');
    fireEvent(lightnessSlider, 'onValueChange', 50);

    const pickButton = getByText('Pick a Color');
    fireEvent.press(pickButton);

    const colorImage = getByTestId('color-image');

    expect(colorImage.props.style[1]).toEqual({ tintColor: 'hsl(30, 50%, 50%)' });
  });
});
