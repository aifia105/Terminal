export const BOOT_LOGS = [
  "[ OK ] Starting kernel initialization...",
  "[ OK ] Loading BIOS configuration...",
  "[ OK ] Initializing hardware components...",
  "[ OK ] Detecting CPU: Problem Solver",
  "[ OK ] Memory: Systems Engineer",
  "[ OK ] Detecting storage devices...",
  "[ OK ] SSD detected: Architecture brain",
  "[ OK ] Loading kernel modules...",
  "[ OK ] Mounting root filesystem...",
  "[ OK ] Checking filesystem integrity...",
  "[ OK ] Starting system clock...",
  "[ OK ] Synchronizing time with NTP servers...",
  "[ OK ] Initializing network interfaces...",
  "[ OK ] eth0: Security-oriented",
  "[ OK ] Loading device drivers...",
  "[ OK ] USB devices detected: 10000 devices",
  "[ OK ] Starting system logger...",
  "[ OK ] Initializing security modules...",
  "[ OK ] Loading SELinux policies...",
  "[ OK ] Starting firewall daemon...",
  "[ OK ] Loading user-space components...",
  "[ OK ] Starting display manager...",
  "[ OK ] Initializing graphics drivers...",
  "[ OK ] Initializing terminal environment...",
  "[ OK ] Loading shell configuration...",
  "[ OK ] Starting SSH daemon...",
  "[ OK ] All services initialized successfully",
  "[ OK ] Portfolio system ready.",
  "",
  "Welcome to Portfolio OS v1.0",
];

export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const BANNER = `<div style="font-family: monospace; line-height: 1.2;">
<div style="color: #fe8181; margin: 0;">
Aifia Med Amine • <span style="color: #febc81;">Software Engineer</span>
</div>
<div style="color: #2d3748;">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
<div style="color: #febc81;">Version: 1.0 | Status: Online</div>
</div>`;

export const INTRO = `<div style="font-family: 'JetBrains Mono', monospace; line-height: 1.5; color: #d2d4d6">

Breaking problems down to the metal !<br />
Focus: <span style="color: #febc81;">distributed systems</span>, <span style="color: #febc81;">backend architectures</span>, <span style="color: #febc81;">CLI tooling</span>.
</div>`;

export const COMMANDTOUSER = "whoami";
export const USERNAME = "aifia";

export const COMMANDS = {
  whoami: {
    description: "Display system identity",
    usage: "whoami",
  },
  sysinfo: {
    description: "Show system information",
    usage: "sysinfo",
  },
  ls: {
    description: "List available directories",
    usage: "ls [directory]",
  },
  projects: {
    description: "Show projects tree structure",
    usage: "projects",
  },
  cat: {
    description: "Display project details",
    usage: "cat <path>",
  },
  tools: {
    description: "List available tools",
    usage: "tools",
  },
  contact: {
    description: "Display contact information",
    usage: "contact",
  },
  clear: {
    description: "Clear terminal screen",
    usage: "clear",
  },
  help: {
    description: "Show this help message",
    usage: "help",
  },
};

export const HELP_MESSAGE = `<div style="font-family: 'JetBrains Mono', monospace; line-height: 1.8; color: #d2d4d6;">
<div style="color: #febc81; margin-bottom: 8px;">Available Commands:</div>
<div style="margin-left: 16px;">
  <div><span style="color: #fe8181;">whoami</span>           Display system identity</div>
  <div><span style="color: #fe8181;">sysinfo</span>          Show system information</div>
  <div><span style="color: #fe8181;">ls</span> [directory]   List available directories</div>
  <div><span style="color: #fe8181;">cat</span> &lt;path&gt;       Display project details</div>
  <div><span style="color: #fe8181;">projects</span>         Show projects tree structure</div>
  <div><span style="color: #fe8181;">tools</span>            List available tools</div>
  <div><span style="color: #fe8181;">contact</span>          Display contact information</div>
  <div><span style="color: #fe8181;">clear</span>            Clear terminal screen</div>
  <div><span style="color: #fe8181;">help</span>             Show this help message</div>
</div>
</div>`;

export const INVALID_COMMAND_RESPONSE = `<div style="font-family: 'JetBrains Mono', monospace; color: #fe8181;">
Command not found. Type <span style="color: #febc81;">'help'</span> to see available commands.
</div>`;

//<span style="color: #febc81;">Systems Engineer</span> • <span style="color: #febc81;">Problem Solver</span> • <span style="color: #febc81;">Linux Enthusiast</span> • <span style="color: #febc81;">Software Developer</span><br />
