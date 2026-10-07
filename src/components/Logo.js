'use client';
import styled from 'styled-components';

const SvgIcon = styled.svg`
  width: ${({ $width }) => $width || '40px'};
  height: auto;
  transition: transform 0.3s ease;
  
  path {
    fill: ${({ theme, $color }) => $color || theme.colors.text};
    transition: fill 0.3s ease;
  }
`;

export default function Logo({ width, className, color }) {
    return (
        <SvgIcon
            className={className}
            $width={width}
            $color={color}
            viewBox="0 0 1536 1024"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M768,160 L1090,860 L930,860 L860,700 L676,700 L606,860 L446,860 Z M768,380 L705,570 L831,570 Z" />
        
        </SvgIcon>
    );
}
