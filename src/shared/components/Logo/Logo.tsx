import React from 'react';
import {Link} from "react-router-dom";

import {Paths} from "@/shared/routing";
import {Color} from "@/shared/constants";

interface LogoProps {
    size?: number;
    color?: string;
}

export const Logo = ({size = 150, color = Color.white}: LogoProps) => {
    return (
        <Link to={Paths.main}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size}
                 viewBox="0 0 500 500">
                <g transform="matrix(4.16 0 0 4.16 252.05952 252.77392)">
                    <polygon
                        fill={color}
                        points="40.2595,34.662000000000006 0.0005000000000094929,-34.66199999999999 -30.030499999999993,17.047000000000004 -19.653499999999994,17.047000000000004 -0.000499999999995282,-16.787999999999997 24.758500000000012,25.840000000000003 -11.878499999999995,25.840000000000003 -11.878499999999995,25.870000000000005 -35.153499999999994,25.870000000000005 -40.259499999999996,34.662000000000006 "
                    />
                </g>
                <g transform="matrix(0.5 0 0 0.5 241.16999999999996 343.1)">
                    <path fill={color} opacity="1"
                          d="M-243.43-9.08L-243.43-9.08Q-242.49-7.40-242.33-5.49Q-242.17-3.57-242.17-1.44L-242.17-1.44L-242.17 0.75L-242.20 0.75Q-242.27 2.19-242.51 3.55Q-242.75 4.90-243.43 6.12L-243.43 6.12Q-244.62 8.22-246.84 9.15L-246.84 9.15Q-248.84 10.08-252.12 10.08L-252.12 10.08Q-255.34 10.08-257.40 9.15L-257.40 9.15Q-259.59 8.18-260.78 6.12L-260.78 6.12Q-261.72 4.45-261.88 2.52Q-262.04 0.58-262.04-1.51L-262.04-1.51L-262.04-3.70L-262.01-3.70Q-261.94-5.15-261.72-6.50Q-261.49-7.85-260.78-9.08L-260.78-9.08Q-259.59-11.14-257.40-12.10L-257.40-12.10Q-255.34-13.04-252.12-13.04L-252.12-13.04Q-248.84-13.04-246.84-12.10L-246.84-12.10Q-244.62-11.17-243.43-9.08ZM-247.39-1.41L-247.39-1.44Q-247.39-2.99-247.45-4.36Q-247.52-5.73-247.97-6.50L-247.97-6.50Q-248.03-6.63-248.21-6.84Q-248.39-7.05-248.84-7.26Q-249.29-7.47-250.06-7.63Q-250.83-7.79-252.12-7.79L-252.12-7.79Q-253.38-7.79-254.17-7.63Q-254.96-7.47-255.39-7.26Q-255.83-7.05-256.00-6.84Q-256.18-6.63-256.24-6.50L-256.24-6.50Q-256.69-5.73-256.76-4.41Q-256.82-3.09-256.82-1.57L-256.82-1.57L-256.82-1.51Q-256.82 0.04-256.76 1.41Q-256.69 2.77-256.24 3.55L-256.24 3.55Q-256.18 3.64-256.00 3.87Q-255.83 4.09-255.39 4.30Q-254.96 4.51-254.17 4.67Q-253.38 4.83-252.12 4.83L-252.12 4.83Q-250.83 4.83-250.06 4.67Q-249.29 4.51-248.84 4.30Q-248.39 4.09-248.21 3.87Q-248.03 3.64-247.97 3.55L-247.97 3.55Q-247.52 2.77-247.45 1.45Q-247.39 0.13-247.39-1.41L-247.39-1.41Z"/>
                    <path fill={color} opacity="1"
                          d="M-220.50-9.08L-220.50-9.08Q-219.57-7.40-219.41-5.49Q-219.25-3.57-219.25-1.44L-219.25-1.44L-219.25 0.75L-219.28 0.75Q-219.34 2.19-219.58 3.55Q-219.83 4.90-220.50 6.12L-220.50 6.12Q-221.69 8.22-223.92 9.15L-223.92 9.15Q-225.91 10.08-229.20 10.08L-229.20 10.08Q-232.42 10.08-234.48 9.15L-234.48 9.15Q-236.67 8.18-237.86 6.12L-237.86 6.12Q-238.79 4.45-238.95 2.52Q-239.11 0.58-239.11-1.51L-239.11-1.51L-239.11-3.70L-239.08-3.70Q-239.02-5.15-238.79-6.50Q-238.57-7.85-237.86-9.08L-237.86-9.08Q-236.67-11.14-234.48-12.10L-234.48-12.10Q-232.42-13.04-229.20-13.04L-229.20-13.04Q-225.91-13.04-223.92-12.10L-223.92-12.10Q-221.69-11.17-220.50-9.08ZM-224.46-1.41L-224.46-1.44Q-224.46-2.99-224.53-4.36Q-224.59-5.73-225.04-6.50L-225.04-6.50Q-225.11-6.63-225.28-6.84Q-225.46-7.05-225.91-7.26Q-226.36-7.47-227.14-7.63Q-227.91-7.79-229.20-7.79L-229.20-7.79Q-230.45-7.79-231.24-7.63Q-232.03-7.47-232.46-7.26Q-232.90-7.05-233.08-6.84Q-233.25-6.63-233.32-6.50L-233.32-6.50Q-233.77-5.73-233.83-4.41Q-233.90-3.09-233.90-1.57L-233.90-1.57L-233.90-1.51Q-233.90 0.04-233.83 1.41Q-233.77 2.77-233.32 3.55L-233.32 3.55Q-233.25 3.64-233.08 3.87Q-232.90 4.09-232.46 4.30Q-232.03 4.51-231.24 4.67Q-230.45 4.83-229.20 4.83L-229.20 4.83Q-227.91 4.83-227.14 4.67Q-226.36 4.51-225.91 4.30Q-225.46 4.09-225.28 3.87Q-225.11 3.64-225.04 3.55L-225.04 3.55Q-224.59 2.77-224.53 1.45Q-224.46 0.13-224.46-1.41L-224.46-1.41Z"/>
                    <path fill={color} opacity="1"
                          d="M-197.58-9.08L-197.58-9.08Q-196.64-7.40-196.48-5.49Q-196.32-3.57-196.32-1.44L-196.32-1.44L-196.32 0.75L-196.35 0.75Q-196.42 2.19-196.66 3.55Q-196.90 4.90-197.58 6.12L-197.58 6.12Q-198.77 8.22-200.99 9.15L-200.99 9.15Q-202.99 10.08-206.27 10.08L-206.27 10.08Q-209.49 10.08-211.55 9.15L-211.55 9.15Q-213.74 8.18-214.93 6.12L-214.93 6.12Q-215.87 4.45-216.03 2.52Q-216.19 0.58-216.19-1.51L-216.19-1.51L-216.19-3.70L-216.15-3.70Q-216.09-5.15-215.87-6.50Q-215.64-7.85-214.93-9.08L-214.93-9.08Q-213.74-11.14-211.55-12.10L-211.55-12.10Q-209.49-13.04-206.27-13.04L-206.27-13.04Q-202.99-13.04-200.99-12.10L-200.99-12.10Q-198.77-11.17-197.58-9.08ZM-201.54-1.41L-201.54-1.44Q-201.54-2.99-201.60-4.36Q-201.66-5.73-202.12-6.50L-202.12-6.50Q-202.18-6.63-202.36-6.84Q-202.53-7.05-202.99-7.26Q-203.44-7.47-204.21-7.63Q-204.98-7.79-206.27-7.79L-206.27-7.79Q-207.53-7.79-208.31-7.63Q-209.10-7.47-209.54-7.26Q-209.97-7.05-210.15-6.84Q-210.33-6.63-210.39-6.50L-210.39-6.50Q-210.84-5.73-210.91-4.41Q-210.97-3.09-210.97-1.57L-210.97-1.57L-210.97-1.51Q-210.97 0.04-210.91 1.41Q-210.84 2.77-210.39 3.55L-210.39 3.55Q-210.33 3.64-210.15 3.87Q-209.97 4.09-209.54 4.30Q-209.10 4.51-208.31 4.67Q-207.53 4.83-206.27 4.83L-206.27 4.83Q-204.98 4.83-204.21 4.67Q-203.44 4.51-202.99 4.30Q-202.53 4.09-202.36 3.87Q-202.18 3.64-202.12 3.55L-202.12 3.55Q-201.66 2.77-201.60 1.45Q-201.54 0.13-201.54-1.41L-201.54-1.41Z"/>
                    <path fill={color} opacity="1" d=""/>
                    <path fill={color} opacity="1"
                          d="M-174.39-7.14L-177.16-7.14L-177.16-12.30L-171.62-12.30L-171.62-3.96L-174.39-7.14ZM-167.60-7.14L-170.37-7.14L-170.37-12.30L-164.83-12.30L-164.83-3.96L-167.60-7.14Z"/>
                    <path fill={color} opacity="1"
                          d="M-140.68-12.42L-150.47-1.15L-140.68 10.15L-147.47 10.15L-154.04 2.55Q-154.20 2.39-154.40 2.47Q-154.59 2.55-154.59 2.77L-154.59 2.77L-154.59 10.15L-159.87 10.15L-159.87-12.42L-154.59-12.42L-154.59-5.05Q-154.59-4.83-154.40-4.76Q-154.20-4.70-154.04-4.86L-154.04-4.86L-147.47-12.42L-140.68-12.42Z"/>
                    <path fill={color} opacity="1"
                          d="M-121.58-9.08L-121.58-9.08Q-120.65-7.40-120.49-5.49Q-120.33-3.57-120.33-1.44L-120.33-1.44L-120.33 0.75L-120.36 0.75Q-120.42 2.19-120.67 3.55Q-120.91 4.90-121.58 6.12L-121.58 6.12Q-122.77 8.22-125.00 9.15L-125.00 9.15Q-126.99 10.08-130.28 10.08L-130.28 10.08Q-133.50 10.08-135.56 9.15L-135.56 9.15Q-137.75 8.18-138.94 6.12L-138.94 6.12Q-139.87 4.45-140.03 2.52Q-140.20 0.58-140.20-1.51L-140.20-1.51L-140.20-3.70L-140.16-3.70Q-140.10-5.15-139.87-6.50Q-139.65-7.85-138.94-9.08L-138.94-9.08Q-137.75-11.14-135.56-12.10L-135.56-12.10Q-133.50-13.04-130.28-13.04L-130.28-13.04Q-126.99-13.04-125.00-12.10L-125.00-12.10Q-122.77-11.17-121.58-9.08ZM-125.54-1.41L-125.54-1.44Q-125.54-2.99-125.61-4.36Q-125.67-5.73-126.12-6.50L-126.12-6.50Q-126.19-6.63-126.37-6.84Q-126.54-7.05-126.99-7.26Q-127.44-7.47-128.22-7.63Q-128.99-7.79-130.28-7.79L-130.28-7.79Q-131.53-7.79-132.32-7.63Q-133.11-7.47-133.55-7.26Q-133.98-7.05-134.16-6.84Q-134.33-6.63-134.40-6.50L-134.40-6.50Q-134.85-5.73-134.91-4.41Q-134.98-3.09-134.98-1.57L-134.98-1.57L-134.98-1.51Q-134.98 0.04-134.91 1.41Q-134.85 2.77-134.40 3.55L-134.40 3.55Q-134.33 3.64-134.16 3.87Q-133.98 4.09-133.55 4.30Q-133.11 4.51-132.32 4.67Q-131.53 4.83-130.28 4.83L-130.28 4.83Q-128.99 4.83-128.22 4.67Q-127.44 4.51-126.99 4.30Q-126.54 4.09-126.37 3.87Q-126.19 3.64-126.12 3.55L-126.12 3.55Q-125.67 2.77-125.61 1.45Q-125.54 0.13-125.54-1.41L-125.54-1.41Z"/>
                    <path fill={color} opacity="1"
                          d="M-104.68-12.42L-99.53-12.42L-99.53 10.15L-104.68 10.15L-104.68 4.35Q-104.68 4.03-105.00 4.03L-105.00 4.03L-111.83 4.03Q-112.12 4.03-112.12 4.35L-112.12 4.35L-112.12 10.15L-117.27 10.15L-117.27-12.42L-112.12-12.42L-112.12-1.44Q-112.12-1.12-111.83-1.12L-111.83-1.12L-105.00-1.12Q-104.68-1.12-104.68-1.44L-104.68-1.44L-104.68-12.42Z"/>
                    <path fill={color} opacity="1"
                          d="M-77.89 1.52L-76.08 6.93L-76.83 7.51Q-80.11 10.05-84.36 10.05L-84.36 10.05Q-86.71 10.05-88.85 9.21Q-90.99 8.38-92.67 6.80L-92.67 6.80Q-94.41 5.16-95.34 3.03Q-96.27 0.91-96.27-1.44L-96.27-1.44Q-96.27-3.80-95.34-5.90Q-94.41-8.01-92.67-9.66L-92.67-9.66Q-90.99-11.27-88.85-12.10Q-86.71-12.94-84.36-12.94L-84.36-12.94Q-80.14-12.94-76.86-10.40L-76.86-10.40L-76.12-9.85L-77.92-4.44L-79.37-5.79Q-80.37-6.73-81.64-7.21Q-82.91-7.69-84.36-7.69L-84.36-7.69Q-85.81-7.69-87.08-7.19Q-88.35-6.69-89.35-5.76L-89.35-5.76Q-91.28-3.92-91.28-1.44L-91.28-1.44Q-91.28-0.22-90.78 0.89Q-90.29 2.00-89.35 2.87L-89.35 2.87Q-88.35 3.80-87.08 4.30Q-85.81 4.80-84.36 4.80L-84.36 4.80Q-82.91 4.80-81.62 4.30Q-80.34 3.80-79.34 2.87L-79.34 2.87L-77.89 1.52Z"/>
                    <path fill={color} opacity="1"
                          d="M-72.64-12.42L-52.71-12.42L-52.71-7.27L-59.86-7.27Q-60.08-7.27-60.08-7.05L-60.08-7.05L-60.08 10.15L-65.23 10.15L-65.23-7.05Q-65.23-7.27-65.46-7.27L-65.46-7.27L-72.64-7.27L-72.64-12.42Z"/>
                    <path fill={color} opacity="1"
                          d="M-50.39-12.36L-39.54-12.36Q-37.51-12.36-35.72-11.59Q-33.94-10.81-32.60-9.49Q-31.26-8.17-30.49-6.39Q-29.72-4.60-29.72-2.57L-29.72-2.57Q-29.72-0.77-30.43 0.97Q-31.13 2.71-32.39 4.09L-32.39 4.09Q-33.81 5.64-35.64 6.44Q-37.48 7.25-39.54 7.25L-39.54 7.25L-45.27 7.25L-45.27 10.15L-50.39 10.15L-50.39-12.36ZM-44.92 2.10L-39.57 2.10Q-38.60 2.10-37.75 1.74Q-36.90 1.39-36.25 0.76Q-35.61 0.13-35.24-0.72Q-34.87-1.57-34.87-2.54L-34.87-2.54Q-34.87-3.51-35.24-4.36Q-35.61-5.21-36.24-5.86Q-36.87-6.50-37.72-6.87Q-38.57-7.24-39.54-7.24L-39.54-7.24L-44.92-7.24Q-45.27-7.24-45.27-6.89L-45.27-6.89L-45.27 1.78Q-45.27 2.10-44.92 2.10L-44.92 2.10Z"/>
                    <path fill={color} opacity="1"
                          d="M-15.16-12.30L-9.72-12.30L-10.33-10.59Q-10.33-10.56-10.62-9.77Q-10.91-8.98-11.35-7.72Q-11.78-6.47-12.33-4.91Q-12.88-3.34-13.44-1.81Q-14.00-0.29-14.50 1.08Q-15.00 2.45-15.32 3.32L-15.32 3.32Q-16.19 5.54-17.34 6.90Q-18.48 8.25-19.80 8.96Q-21.12 9.66-22.57 9.89Q-24.02 10.12-25.50 10.12L-25.50 10.12L-26.79 10.12L-26.79 4.96L-25.50 4.96Q-23.82 4.96-22.70 4.45L-22.70 4.45L-28.69-12.30L-23.24-12.30L-19.22-1.03L-15.16-12.30Z"/>
                    <path fill={color} opacity="1"
                          d="M12.53-12.42L2.74-1.15L12.53 10.15L5.74 10.15L-0.83 2.55Q-0.99 2.39-1.19 2.47Q-1.38 2.55-1.38 2.77L-1.38 2.77L-1.38 10.15L-6.66 10.15L-6.66-12.42L-1.38-12.42L-1.38-5.05Q-1.38-4.83-1.19-4.76Q-0.99-4.70-0.83-4.86L-0.83-4.86L5.74-12.42L12.53-12.42Z"/>
                    <path fill={color} opacity="1"
                          d="M31.82 4.35L31.82 4.35L32.72 4.35L32.72 10.98L27.79 10.98L27.79 9.34L16.01 9.34L16.01-12.26L20.93-12.26L20.93 4.42L26.89 4.42L26.89-12.26L31.82-12.26L31.82 4.35Z"/>
                    <path fill={color} opacity="1"
                          d="M34.97-12.42L40.12-12.42L40.12-0.64Q40.12-0.58 40.16-0.56Q40.19-0.54 40.22-0.61L40.22-0.61L48.21-12.42L52.88-12.42L52.88 10.15L47.72 10.15L47.72-2.31Q47.72-2.38 47.69-2.39Q47.66-2.41 47.63-2.35L47.63-2.35L39.55 10.15L34.97 10.15L34.97-12.42Z"/>
                    <path fill={color} opacity="1"
                          d="M66.34-12.46L66.34-12.46L78.15-12.46L78.15 10.15L73.00 10.15L73.00 7.51Q73.00 7.22 72.74 7.22L72.74 7.22L68.33 7.22Q68.11 7.22 68.07 7.41L68.07 7.41L67.04 10.15L61.51 10.15L62.86 6.57Q60.38 5.64 58.74 3.61L58.74 3.61Q57.64 2.29 57.06 0.70Q56.48-0.90 56.48-2.60L56.48-2.60Q56.48-4.63 57.26-6.44Q58.03-8.24 59.38-9.57Q60.73-10.91 62.52-11.68Q64.31-12.46 66.34-12.46ZM66.37 2.07L66.37 2.07L72.74 2.07Q73.00 2.07 73.00 1.81L73.00 1.81L73.00-7.02Q73.00-7.30 72.74-7.30L72.74-7.30L66.34-7.30Q65.37-7.30 64.52-6.93Q63.66-6.56 63.02-5.92Q62.38-5.28 62.02-4.42Q61.67-3.57 61.67-2.60L61.67-2.60Q61.67-1.64 62.04-0.78Q62.41 0.07 63.05 0.70Q63.70 1.32 64.55 1.70Q65.40 2.07 66.37 2.07Z"/>
                    <path fill={color} opacity="1" d=""/>
                    <path fill={color} opacity="1"
                          d="M115.41 1.52L117.21 6.93L116.47 7.51Q113.19 10.05 108.94 10.05L108.94 10.05Q106.59 10.05 104.44 9.21Q102.30 8.38 100.63 6.80L100.63 6.80Q98.89 5.16 97.96 3.03Q97.02 0.91 97.02-1.44L97.02-1.44Q97.02-3.80 97.96-5.90Q98.89-8.01 100.63-9.66L100.63-9.66Q102.30-11.27 104.44-12.10Q106.59-12.94 108.94-12.94L108.94-12.94Q113.15-12.94 116.44-10.40L116.44-10.40L117.18-9.85L115.38-4.44L113.93-5.79Q112.93-6.73 111.66-7.21Q110.39-7.69 108.94-7.69L108.94-7.69Q107.49-7.69 106.22-7.19Q104.94-6.69 103.95-5.76L103.95-5.76Q102.01-3.92 102.01-1.44L102.01-1.44Q102.01-0.22 102.51 0.89Q103.01 2.00 103.95 2.87L103.95 2.87Q104.94 3.80 106.22 4.30Q107.49 4.80 108.94 4.80L108.94 4.80Q110.39 4.80 111.67 4.30Q112.96 3.80 113.96 2.87L113.96 2.87L115.41 1.52Z"/>
                    <path fill={color} opacity="1"
                          d="M120.37-12.42L120.37-12.42L139.24-12.42L139.24 10.08L134.05 10.08L134.05-7.27L125.52-7.27L125.52 10.08L120.37 10.08L120.37-12.42Z"/>
                    <path fill={color} opacity="1"
                          d="M148.51-3.76L154.82-3.76Q156.24-3.76 157.51-3.22Q158.78-2.67 159.73-1.73Q160.68-0.80 161.23 0.46Q161.78 1.71 161.78 3.16L161.78 3.16Q161.78 4.58 161.25 5.85Q160.71 7.12 159.76 8.07Q158.81 9.02 157.56 9.57Q156.30 10.12 154.89 10.12L154.89 10.12L143.07 10.12L143.07-12.39L160.01-12.39L160.01-7.14L148.51-7.14Q148.22-7.14 148.22-6.82L148.22-6.82L148.22-4.05Q148.22-3.76 148.51-3.76L148.51-3.76ZM154.85 1.39L148.51 1.39Q148.22 1.39 148.22 1.71L148.22 1.71L148.22 4.64Q148.22 4.93 148.51 4.93L148.51 4.93L154.89 4.93Q155.63 4.93 156.14 4.40Q156.66 3.87 156.62 3.13L156.62 3.13Q156.62 2.39 156.11 1.89Q155.59 1.39 154.85 1.39L154.85 1.39Z"/>
                    <path fill={color} opacity="1"
                          d="M167.44-7.14L164.67-7.14L164.67-12.30L170.21-12.30L170.21-3.96L167.44-7.14ZM174.24-7.14L171.47-7.14L171.47-12.30L177.01-12.30L177.01-3.96L174.24-7.14Z"/>
                </g>
            </svg>
        </Link>
    );
};

