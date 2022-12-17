import type { NextComponentType } from 'next';
import { MdEmail } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineGithub, AiOutlineTwitter, AiFillHeart } from 'react-icons/ai';
import Link from 'next/link';

export const Experience: NextComponentType = () => (
  <div className="my-16 px-3 font-sen ctx" id="experience">
    <p className="text-3xl font-bold dark:text-white mb-8">Experience</p>

    <div className="flex relative border-l border-l-gray-600 px-4 py-2  border-gray-400">
      <span className="w-2 h-2 bg-gray-600 -left-1 rounded-full absolute top-1/2 -translate-y-1/2" />
      <a
        href="https://zeza.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 flex items-center justify-center shadow-none hover:shadow-none text-foreground"
      >
        <svg
          viewBox="0 0 76 85"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width={50}
          style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
          }}
        >
          <path d="M17.389 0h40.666v84.279H17.389z" style={{ fill: 'none' }} />
          <path
            d="M42.796 44.251c1.278 1.318 2.9 2.831 4.779 4.224 1.813 2.358 3.522 5.113 4.656 8.163.84 2.284 1.371 4.744 1.371 7.323 0 8.752-7.132 15.883-15.884 15.883-5.306 0-10.017-2.616-12.903-6.63a15.848 15.848 0 0 0 4.968-1.686 10.932 10.932 0 0 0 7.935 3.409c6.056 0 10.962-4.921 10.962-10.962 0-2.711-.839-6.88-4.626-11.978a38.19 38.19 0 0 0-1.503-1.886 40.875 40.875 0 0 0-2.754-2.932c.02-1.092.08-2.045.146-2.797a43.703 43.703 0 0 1 2.853-.131zm10.152-28.463a15.85 15.85 0 0 1 .654 4.516c0 2.563-.516 5.024-1.371 7.322-1.134 3.065-2.843 5.82-4.656 8.178-1.896 1.406-3.537 2.935-4.821 4.26a41.987 41.987 0 0 1-2.811-.146 39.813 39.813 0 0 1-.131-2.839c1.321-1.28 2.842-2.909 4.242-4.797 2.49-3.359 4.626-7.529 4.626-11.978 0-1.151-.178-2.262-.509-3.306a10.967 10.967 0 0 1 4.777-1.21zm-2.313-4.719C47.752 7.047 43.039 4.42 37.718 4.42c-8.766 0-15.883 7.132-15.883 15.884 0 2.578.53 5.039 1.37 7.322 1.135 3.05 2.844 5.82 4.656 8.178 1.89 1.401 3.52 2.923 4.8 4.245a40.22 40.22 0 0 0 2.832-.131c.067-.762.127-1.725.147-2.828-1.321-1.281-2.844-2.914-4.257-4.808-2.505-3.359-4.627-7.529-4.627-11.978 0-6.041 4.921-10.962 10.962-10.962 3.12 0 5.94 1.312 7.939 3.413a15.853 15.853 0 0 1 4.978-1.686zM22.497 68.506a15.864 15.864 0 0 1-.662-4.545c0-2.564.516-5.025 1.37-7.323 1.135-3.05 2.844-5.805 4.656-8.163a38.19 38.19 0 0 0 1.886-1.503 40.576 40.576 0 0 0 2.915-2.737c1.1.021 2.06.081 2.817.147.06.764.115 1.729.13 2.833-1.318 1.278-2.832 2.901-4.226 4.782-2.49 3.359-4.627 7.529-4.627 11.978 0 1.158.181 2.274.515 3.322a10.95 10.95 0 0 1-4.774 1.209z"
            style={{ fill: 'url("#a")' }}
          />
          <path
            d="M58.249 42.184c2.224 1.017 4.33 2.387 6.142 4.213 6.173 6.218 6.158 16.296-.03 22.484-3.742 3.728-8.885 5.201-13.747 4.421a15.695 15.695 0 0 0 2.343-4.715 10.879 10.879 0 0 0 7.942-3.183c4.287-4.258 4.302-11.212.029-15.5-3.138-3.168-7.603-4.612-11.743-5.231a38.584 38.584 0 0 0-6.365-.412 45.701 45.701 0 0 0-2.844.132c-.059.752-.118 1.71-.132 2.8-.03 1.842.044 4.067.383 6.409.604 4.14 2.033 8.605 5.171 11.758.84.84 1.783 1.518 2.785 2.033a10.845 10.845 0 0 1-2.549 4.214 15.976 15.976 0 0 1-3.728-2.785c-1.827-1.812-3.182-3.934-4.199-6.158l-.019-.042-.014.031c-1.017 2.224-2.387 4.331-4.214 6.144-6.218 6.188-16.296 6.158-22.469-.045-6.174-6.203-6.159-16.281.059-22.454 1.812-1.827 3.933-3.183 6.158-4.199l.021-.01c-2.22-1.016-4.323-2.384-6.131-4.208-6.189-6.203-6.159-16.281.044-22.469 3.742-3.728 8.884-5.201 13.747-4.421a15.695 15.695 0 0 0-2.343 4.715 10.879 10.879 0 0 0-7.942 3.183c-4.287 4.258-4.302 11.212-.029 15.5 1.9 1.93 5.451 4.288 11.728 5.231.751.118 1.547.206 2.387.28a42.948 42.948 0 0 0 6.805.001c.176-2.036.306-5.489-.238-9.207l.009-.068c-.609-4.122-2.04-8.556-5.162-11.693A11.112 11.112 0 0 0 27.32 16.9a10.828 10.828 0 0 1 2.549-4.214 15.496 15.496 0 0 1 3.727 2.77c1.82 1.805 3.172 3.917 4.187 6.131 1.015-2.208 2.379-4.298 4.193-6.098 6.218-6.188 16.296-6.159 22.47.044 6.188 6.203 6.158 16.281-.045 22.455-1.81 1.825-3.93 3.18-6.152 4.196zm-9.061-2.505c4.134-.606 8.589-2.036 11.736-5.168 4.288-4.273 4.303-11.228.03-15.501-4.258-4.287-11.213-4.302-15.5-.029-1.917 1.888-4.256 5.403-5.212 11.6l.014.11a35.596 35.596 0 0 0-.28 2.387 42.604 42.604 0 0 0 0 6.836c.302.03.636.057 1 .08.26.016.535.03.822.042.315.012.647.021.992.026 1.828.029 4.067-.045 6.395-.383h.003zM14.483 65.29c4.258 4.273 11.212 4.302 15.5.029 3.153-3.138 4.611-7.602 5.216-11.728.559-3.713.442-7.175.279-9.209-2.018-.176-5.481-.309-9.208.236-4.141.604-8.605 2.033-11.758 5.172-4.288 4.258-4.302 11.212-.029 15.5z"
            style={{ fill: 'url("#b")' }}
          />
          <path
            d="M8.325 34.198a15.668 15.668 0 0 1-1.68-4.98C2.623 32.12 0 36.821 0 42.139c0 5.29 2.593 9.975 6.571 12.863.28-1.724.84-3.418 1.695-4.98a10.91 10.91 0 0 1-3.345-7.868c0-3.138 1.312-5.952 3.404-7.956zm60.542-4.921a15.783 15.783 0 0 1-1.695 4.995 10.91 10.91 0 0 1 3.345 7.867c0 3.124-1.311 5.938-3.404 7.942a15.545 15.545 0 0 1 1.68 4.98c4.022-2.888 6.645-7.603 6.645-12.907s-2.593-9.989-6.571-12.877zm-9.312 1.9c1.193 0 2.328.192 3.403.546a10.958 10.958 0 0 0 1.194-4.789 15.774 15.774 0 0 0-4.597-.678c-8.354 0-15.5 5.54-19.744 9.769-.81.81-1.517 1.562-2.092 2.225a43.704 43.704 0 0 0-2.077-2.21c-4.229-4.229-11.39-9.784-19.759-9.784-1.576 0-3.094.236-4.523.663.029 1.65.442 3.286 1.208 4.774a10.76 10.76 0 0 1 3.315-.516c6.955 0 13.217 5.201 16.768 8.87a47.156 47.156 0 0 1 1.915 2.107 37.802 37.802 0 0 1-1.886 2.078 39.263 39.263 0 0 1-2.932 2.755c-5.953 5.068-10.83 6.129-13.865 6.129a10.82 10.82 0 0 1-3.403-.545 10.971 10.971 0 0 0-1.194 4.789c1.459.442 2.991.677 4.597.677 8.354 0 15.5-5.54 19.729-9.753a52.715 52.715 0 0 0 2.107-2.24 43.732 43.732 0 0 0 2.078 2.21c4.228 4.229 11.389 9.783 19.758 9.783 1.576 0 3.094-.235 4.523-.663a10.855 10.855 0 0 0-1.208-4.773 10.759 10.759 0 0 1-3.315.515c-6.94 0-13.202-5.186-16.767-8.855a45.58 45.58 0 0 1-1.916-2.107 45.589 45.589 0 0 1 1.901-2.092c3.551-3.669 9.827-8.885 16.782-8.885z"
            style={{ fill: 'rgb(36, 117, 245)', fillRule: 'nonzero' }}
          />
          <path
            d="M34.566 42.14c1.046 1.296 2.092 2.593 3.153 3.89-.295.339-.604.677-.928 1.016-.545.59-1.105 1.164-1.636 1.709-1.031-1.296-2.048-2.607-3.079-3.904a53.72 53.72 0 0 0 1.738-1.827c.266-.309.516-.589.752-.884z"
            style={{ fill: 'url("#c")', fillRule: 'nonzero' }}
          />
          <path
            d="M40.872 42.14c-1.046-1.297-2.107-2.594-3.153-3.89.368-.427.766-.855 1.193-1.297.442-.456.869-.898 1.311-1.326 1.135 1.194 2.255 2.387 3.389 3.581a44.965 44.965 0 0 0-1.974 2.062c-.265.295-.516.59-.766.87z"
            style={{ fill: 'url("#d")', fillRule: 'nonzero' }}
          />
          <path
            d="M17.357 31.251a15.914 15.914 0 0 0-1.474-.074 10.76 10.76 0 0 0-3.315.516 10.91 10.91 0 0 1-1.208-4.774 15.718 15.718 0 0 1 3.565-.634l2.432 4.966z"
            style={{ fill: 'url("#e")', fillRule: 'nonzero' }}
          />
          <path
            d="M8.324 34.198a10.886 10.886 0 0 0-2.401 3.344l-2.549-5.201a15.967 15.967 0 0 1 3.256-3.124 16.373 16.373 0 0 0 1.694 4.981z"
            style={{ fill: 'url("#f")', fillRule: 'nonzero' }}
          />
          <path
            d="M58.14 31.251a9.255 9.255 0 0 1 1.473-.074 11.31 11.31 0 0 1 3.345.545c.309-.604.648-1.4.884-2.387.221-.928.295-1.753.295-2.387a13.808 13.808 0 0 0-1.754-.442 15.523 15.523 0 0 0-1.812-.221l-2.431 4.966z"
            style={{ fill: 'url("#g")', fillRule: 'nonzero' }}
          />
          <path
            d="M67.173 34.257c.398.383.854.884 1.296 1.517.472.663.796 1.282 1.047 1.813.854-1.724 1.723-3.448 2.578-5.187a17.216 17.216 0 0 0-1.459-1.635 15.944 15.944 0 0 0-1.768-1.488 15.275 15.275 0 0 1-.633 2.549 15.354 15.354 0 0 1-1.061 2.431z"
            style={{ fill: 'url("#h")', fillRule: 'nonzero' }}
          />
          <path
            d="M17.21 53.028a9.168 9.168 0 0 1-1.473.073 10.463 10.463 0 0 1-3.242-.545 10.685 10.685 0 0 0-.869 2.284c-.25.973-.324 1.842-.324 2.505a17.039 17.039 0 0 0 3.477.648l2.431-4.965z"
            style={{ fill: 'url("#i")', fillRule: 'nonzero' }}
          />
          <path
            d="M8.266 50.022a12.49 12.49 0 0 1-1.312-1.532 10.05 10.05 0 0 1-1.061-1.857c-.854 1.724-1.724 3.463-2.578 5.187.383.501.854 1.061 1.429 1.635a13.95 13.95 0 0 0 1.842 1.532c.118-.766.324-1.679.678-2.681.294-.899.663-1.665 1.001-2.284z"
            style={{ fill: 'url("#j")', fillRule: 'nonzero' }}
          />
          <path
            d="M58.14 53.027c.442.059.943.088 1.473.073a11.965 11.965 0 0 0 3.257-.501c.294.575.633 1.341.869 2.284.25.973.309 1.827.309 2.476-.486.147-1.046.294-1.665.412a15.31 15.31 0 0 1-1.812.221l-2.431-4.965z"
            style={{ fill: 'url("#k")', fillRule: 'nonzero' }}
          />
          <path
            d="M67.114 50.081a11.04 11.04 0 0 0 2.387-3.3c.854 1.709 1.724 3.433 2.578 5.142a19.431 19.431 0 0 1-1.458 1.636 15.327 15.327 0 0 1-1.813 1.517 15.273 15.273 0 0 0-.604-2.475 16.117 16.117 0 0 0-1.09-2.52z"
            style={{ fill: 'url("#l")', fillRule: 'nonzero' }}
          />
          <defs>
            <linearGradient
              id="a"
              x1={0}
              y1={0}
              x2={1}
              y2={0}
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(90 16.649 21.07) scale(75.4234)"
            >
              <stop
                offset={0}
                style={{
                  stopColor: 'rgb(36, 117, 245)',
                  stopOpacity: '0.25',
                }}
              />
              <stop
                offset="0.5"
                style={{ stopColor: 'rgb(36, 117, 245)', stopOpacity: '0.2' }}
              />
              <stop
                offset={1}
                style={{
                  stopColor: 'rgb(36, 117, 245)',
                  stopOpacity: '0.25',
                }}
              />
            </linearGradient>
            <linearGradient
              id="c"
              x1={0}
              y1={0}
              x2={1}
              y2={0}
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(-45.898 71.799 -16.484) scale(6.4887)"
            >
              <stop
                offset={0}
                style={{ stopColor: 'rgb(87, 25, 57)', stopOpacity: 0 }}
              />
              <stop
                offset={1}
                style={{ stopColor: 'rgb(87, 25, 57)', stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient
              id="d"
              x1={0}
              y1={0}
              x2={1}
              y2={0}
              gradientUnits="userSpaceOnUse"
              gradientTransform="scale(-6.5806) rotate(-46.033 -9.909 4.633)"
            >
              <stop
                offset={0}
                style={{ stopColor: 'rgb(85, 25, 56)', stopOpacity: 0 }}
              />
              <stop
                offset={1}
                style={{ stopColor: 'rgb(86, 25, 57)', stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient
              id="e"
              x1={0}
              y1={0}
              x2={1}
              y2={0}
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(5.8643 -1.2535 1.2535 5.8643 8.59 30.289)"
            >
              <stop
                offset={0}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.5' }}
              />
              <stop
                offset="0.14"
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.5' }}
              />
              <stop
                offset={1}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: 0 }}
              />
            </linearGradient>
            <linearGradient
              id="f"
              x1={0}
              y1={0}
              x2={1}
              y2={0}
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(134.928 -1.867 17.14) scale(4.9448)"
            >
              <stop
                offset={0}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.35' }}
              />
              <stop
                offset={1}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: 0 }}
              />
            </linearGradient>
            <linearGradient
              id="g"
              x1={0}
              y1={0}
              x2={1}
              y2={0}
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-5.8936 -1.2598 1.2598 -5.8936 66.95 30.3)"
            >
              <stop
                offset={0}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.5' }}
              />
              <stop
                offset="0.14"
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.5' }}
              />
              <stop
                offset={1}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: 0 }}
              />
            </linearGradient>
            <linearGradient
              id="h"
              x1={0}
              y1={0}
              x2={1}
              y2={0}
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(45.071 -3.638 95.507) scale(4.9052)"
            >
              <stop
                offset={0}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.35' }}
              />
              <stop
                offset={1}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: 0 }}
              />
            </linearGradient>
            <linearGradient
              id="i"
              x1={0}
              y1={0}
              x2={1}
              y2={0}
              gradientUnits="userSpaceOnUse"
              gradientTransform="scale(5.9268) rotate(12.066 -42.38 11.374)"
            >
              <stop
                offset={0}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.5' }}
              />
              <stop
                offset="0.14"
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.5' }}
              />
              <stop
                offset={1}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: 0 }}
              />
            </linearGradient>
            <linearGradient
              id="j"
              x1={0}
              y1={0}
              x2={1}
              y2={0}
              gradientUnits="userSpaceOnUse"
              gradientTransform="scale(-4.9466) rotate(45.072 12.166 -7.588)"
            >
              <stop
                offset={0}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.35' }}
              />
              <stop
                offset={1}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: 0 }}
              />
            </linearGradient>
            <linearGradient
              id="k"
              x1={0}
              y1={0}
              x2={1}
              y2={0}
              gradientUnits="userSpaceOnUse"
              gradientTransform="scale(-5.9289) rotate(-12.065 -48.73 48.765)"
            >
              <stop
                offset={0}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.5' }}
              />
              <stop
                offset="0.14"
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.5' }}
              />
              <stop
                offset={1}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: 0 }}
              />
            </linearGradient>
            <linearGradient
              id="l"
              x1={0}
              y1={0}
              x2={1}
              y2={0}
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(-45.071 97.982 -53.279) scale(4.9177)"
            >
              <stop
                offset={0}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: '0.35' }}
              />
              <stop
                offset={1}
                style={{ stopColor: 'rgb(0, 0, 0)', stopOpacity: 0 }}
              />
            </linearGradient>
            <radialGradient
              id="b"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-26.9684 25.3995 -25.4563 -27.0287 36.819 40.533)"
            >
              <stop
                offset={0}
                style={{ stopColor: 'rgb(36, 117, 245)', stopOpacity: '0.3' }}
              />
              <stop
                offset="0.61"
                style={{
                  stopColor: 'rgb(36, 117, 245)',
                  stopOpacity: '0.45',
                }}
              />
              <stop
                offset={1}
                style={{
                  stopColor: 'rgb(36, 117, 245)',
                  stopOpacity: '0.45',
                }}
              />
            </radialGradient>
          </defs>
        </svg>
      </a>
      <div className="w-full ml-4">
        <p className="my-0 text-foreground font-bold text-xl">
          Frontend intern
        </p>
        <p className="my-0 text-lg font-bold">Zeza</p>
        <p className="my-0 text-sm  dark:text-gray-300 text-gray-500">
          Aug 2022 - Nov 2022
        </p>
        <ul className="work dark:text-gray-400 text-gray-600">
          <li>
            Core Responsibility: fixing bugs faced by the clients in the project
          </li>
          <li>
            Created and implemented POC for a probable feature.
            <a
              href="https://folder-structure-poc.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className=" ml-1 text-foreground dark:text-gray-200 text-blue-500 underline"
            >
              Link
            </a>
          </li>
          <li>
            <span className="text-foreground dark:text-gray-200 font-bold">
              Tech Stack:
            </span>
            &nbsp; NextJS, Bootstrap
          </li>
          <li>
            <span className="text-foreground dark:text-gray-200 font-bold">
              Tools:
            </span>
            &nbsp; Figma, Postman
          </li>
        </ul>
      </div>
    </div>
    <div className="flex relative border-l border-l-gray-600 px-4 py-2  border-gray-400">
      <span className="w-2 h-2 bg-gray-600 -left-1 rounded-full absolute top-1/2 -translate-y-1/2" />
      <a
        href="https://setu.co"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 flex items-center justify-center shadow-none hover:shadow-none text-foreground"
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 350"
        >
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html: '.cls-1{fill:#20014b;}.cls-2{fill:#42cacd;}',
              }}
            />
          </defs>
          <path
            id="Path_176"
            data-name="Path 176"
            className="cls-1"
            d="M175,350A175,175,0,1,0,0,175,175,175,0,0,0,175,350"
          />
          <g id="Group_20" data-name="Group 20">
            <path
              id="Path_177"
              data-name="Path 177"
              className="cls-2"
              d="M231,235H115V224H230.94a5.85,5.85,0,0,1,5.64,5.64,5.62,5.62,0,0,1-5.64,5.36"
            />
            <path
              id="Path_178"
              data-name="Path 178"
              className="cls-2"
              d="M220,257H115V246H219.89a5.62,5.62,0,0,1,5.37,5.64,5.38,5.38,0,0,1-5.37,5.36"
            />
            <path
              id="Path_179"
              data-name="Path 179"
              className="cls-2"
              d="M231.07,93a5.39,5.39,0,0,1,5.37,5.37,5.62,5.62,0,0,1-5.37,5.63H126V93Z"
            />
            <path
              id="Path_180"
              data-name="Path 180"
              className="cls-2"
              d="M231.08,115a5.38,5.38,0,0,1,5.37,5.36,5.63,5.63,0,0,1-5.37,5.64H115V115Z"
            />
            <path
              id="Path_181"
              data-name="Path 181"
              className="cls-2"
              d="M153.29,137a5.86,5.86,0,0,1,5.64,5.64,5.62,5.62,0,0,1-5.64,5.36H104V137Z"
            />
            <path
              id="Path_182"
              data-name="Path 182"
              className="cls-2"
              d="M240.69,202a5.85,5.85,0,0,1,5.64,5.63,5.63,5.63,0,0,1-5.64,5.37H191V202Z"
            />
            <path
              id="Path_183"
              data-name="Path 183"
              className="cls-2"
              d="M219.9,159a5.38,5.38,0,0,1,5.36,5.36A5.6,5.6,0,0,1,219.9,170H115V159Z"
            />
            <path
              id="Path_184"
              data-name="Path 184"
              className="cls-2"
              d="M231,191H126V180H231.15a5.61,5.61,0,0,1,5.36,5.64,5.38,5.38,0,0,1-5.36,5.36"
            />
          </g>
        </svg>
      </a>
      <div className="w-full ml-4">
        <p className="my-0 text-foreground font-bold text-xl">
          Frontend intern
        </p>
        <p className="my-0 text-lg font-bold">Setu</p>
        <p className="my-0 text-sm  dark:text-gray-300 text-gray-500">
          Dec 2022 - Present
        </p>
        <ul className="work dark:text-gray-400 text-gray-600">
          <li>
            <span className="text-foreground dark:text-gray-200 font-bold">
              Tech Stack:
            </span>
            &nbsp; NextJS, Typescript, styled-components
          </li>
          <li>
            <span className="text-foreground dark:text-gray-200 font-bold">
              Tools:
            </span>
            &nbsp; Figma, Jira
          </li>
        </ul>
      </div>
    </div>
  </div>
);
