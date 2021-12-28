import React from 'react';

interface StepItemProps {
  icon: 'step1' | 'step2' | 'step3';
  text: string[];
  title: string;
}
export default function index(props: StepItemProps) {
  const { text, icon, title } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img
          src={`/icon/${icon}.svg`}
          width={80}
          height={80}
          alt="icon step"
          className="mb-30"
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {text[0]}
          <br />
          {text[1]}
        </p>
      </div>
    </div>
  );
}
