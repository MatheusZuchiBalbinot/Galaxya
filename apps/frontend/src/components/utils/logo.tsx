'use client';

import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
	({ className = '', ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={`w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center ${className}`}
				{...props}
			>
				<svg
					className="w-6 h-6 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
				</svg>
			</div>
		);
	},
);

Logo.displayName = 'Logo';

export { Logo };
