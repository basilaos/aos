export type RichRun = { text: string; bold?: boolean; italic?: boolean };
export type PlaybookBlock =
  | { type: 'paragraph' | 'heading'; runs: RichRun[] }
  | { type: 'list'; ordered: boolean; items: RichRun[][] }
  | { type: 'image'; src: string; alt: string }
  | { type: 'table'; rows: string[][] };
export type PlaybookSection = { id: string; title: string; chapterId: string; chapterTitle: string; index: number; prev: string | null; next: string | null; summary: string; blocks: PlaybookBlock[] };
export type PlaybookChapter = { id: string; title: string; sections: Array<{ id: string; title: string }> };

export const playbookTitle = "BasilAOS Workbench Playbook";
export const playbookChapters: PlaybookChapter[] = [
  {
    "id": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "title": "Chapter 1 · Meet Basil AgentOS — Your New Work Partner",
    "sections": [
      {
        "id": "1-1-meet-workbench-it-s-not-just-another-chat-box",
        "title": "1.1 Meet Workbench — It's Not Just Another Chat Box"
      },
      {
        "id": "1-2-workbench-main-interface-workspace",
        "title": "1.2 Workbench Main Interface & Workspace"
      },
      {
        "id": "1-3-your-first-task-in-seconds",
        "title": "1.3 Your First Task in Seconds"
      },
      {
        "id": "1-4-drop-your-files-in",
        "title": "1.4 Drop Your Files In"
      },
      {
        "id": "1-5-multidimensional-tables-structured-data-your-agent-can-work-with",
        "title": "1.5 Base — Structured Data Your Agent Can Work With"
      },
      {
        "id": "1-6-install-your-first-skill",
        "title": "1.6 Install Your First Skill"
      },
      {
        "id": "1-7-connect-your-first-service",
        "title": "1.7 Connect Your First Service"
      },
      {
        "id": "1-8-getting-more-like-your-actual-personal-assistant",
        "title": "1.8 Getting More Like Your Actual Personal Assistant"
      },
      {
        "id": "1-9-what-basil-can-and-can-t-do",
        "title": "1.9 What Basil Can and Can't Do"
      }
    ]
  },
  {
    "id": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "title": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "sections": [
      {
        "id": "scenario-1-email-management-structured-follow-ups",
        "title": "Scenario 1: Email Management & Structured Follow-ups"
      },
      {
        "id": "scenario-2-document-summarization-translation",
        "title": "Scenario 2: Document Summarization & Translation"
      },
      {
        "id": "scenario-3-data-analysis-insights",
        "title": "Scenario 3: Data Analysis & Insights"
      },
      {
        "id": "scenario-4-storytelling-ppt-html-generation-production",
        "title": "Scenario 4: Storytelling — PPT/HTML Generation & Production"
      },
      {
        "id": "scenario-5-fashion-industry-news-inspiration-search",
        "title": "Scenario 5: Fashion Industry News & Inspiration Search"
      },
      {
        "id": "scenario-6-personal-folder-organization",
        "title": "Scenario 6: Personal Folder Organization"
      }
    ]
  },
  {
    "id": "chapter-3-role-specific-scenarios",
    "title": "Chapter 3 · Role-Specific Scenarios",
    "sections": [
      {
        "id": "scenario-1-hr-jd-generation-resume-screening-candidate-management",
        "title": "Scenario 1 · HR: JD Generation, Resume Screening & Candidate Management"
      },
      {
        "id": "scenario-2-legal-supplier-contract-review-template-generation-expiry-tracking",
        "title": "Scenario 2 · Legal: Supplier Contract Review, Template Generation & Expiry Tracking"
      },
      {
        "id": "scenario-3-finance-invoice-processing-reconciliation-auto-reminders",
        "title": "Scenario 3 · Finance: Invoice Processing, Reconciliation & Auto-Reminders"
      },
      {
        "id": "scenario-4-designers-ai-image-generation-fabric-recoloring",
        "title": "Scenario 4 · Designers: AI Image Generation & Fabric Recoloring"
      },
      {
        "id": "scenario-5-e-commerce-operations-multi-channel-product-copy-data-insights",
        "title": "Scenario 5 · E-commerce Operations: Multi-Channel Product Copy & Data Insights"
      },
      {
        "id": "scenario-6-marketing-competitor-social-media-monitoring-campaign-posters-ai-video-production",
        "title": "Scenario 6 · Marketing: Competitor Social Media Monitoring, Campaign Posters & AI Video Production"
      },
      {
        "id": "scenario-7-sales-lead-automation-multi-source-prospecting",
        "title": "Scenario 7 · Sales: Lead Automation & Multi-Source Prospecting"
      },
      {
        "id": "scenario-8-merchandise-planning-product-operations-analysis-inventory-risk-alerts",
        "title": "Scenario 8 · Merchandise Planning: Product Operations Analysis & Inventory Risk Alerts"
      }
    ]
  },
  {
    "id": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "title": "Chapter 4 · Project, Skill & Work — Turn One-Time Wins Into a System",
    "sections": [
      {
        "id": "4-1-project-a-permanent-home-for-ongoing-work",
        "title": "4.1 Project — A Permanent Home for Ongoing Work"
      },
      {
        "id": "4-2-understanding-skill-what-it-is-and-why-it-matters",
        "title": "4.2 Understanding Skill: What It Is and Why It Matters"
      },
      {
        "id": "4-3-mastering-skills-from-installation-to-creation",
        "title": "4.3 Mastering Skills: From Installation to Creation"
      },
      {
        "id": "4-4-tuning-skills-when-standard-isn-t-enough",
        "title": "4.4 Tuning Skills: When Standard Isn't Enough"
      },
      {
        "id": "4-5-work-package-skills-into-a-role",
        "title": "4.5 Work: Package Skills Into a Role"
      },
      {
        "id": "appendix-the-ai-work-system-in-one-chapter",
        "title": "Appendix: The AI Work System in One Chapter"
      }
    ]
  }
];

export const playbookSections: PlaybookSection[] = [
  {
    "id": "1-1-meet-workbench-it-s-not-just-another-chat-box",
    "title": "1.1 Meet Workbench — It's Not Just Another Chat Box",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet Basil AgentOS — Your New Work Partner",
    "index": 1,
    "prev": null,
    "next": "1-2-workbench-main-interface-workspace",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You've probably used ChatGPT or something like it. Type a question, get an answer. Tools like that are capable assistants — but they work outside your company: they aren't connected to your company's files, tables, or systems, so you upload material by hand and copy the results back out yourself."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Basil AgentOS is not that."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Basil AgentOS is an enterprise-grade AI agent operating system. Its unified work interface is called Workbench. Think of it as hiring a coworker who lives inside your computer: reads your files, queries your data tables, remembers your preferences, runs tasks on schedule, and hands you finished work."
          }
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-01.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Here's the difference at a glance:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool",
            "What it does",
            "What it doesn't do"
          ],
          [
            "Chatbot",
            "Answers preset FAQs",
            "Can't create files or access your data"
          ],
          [
            "AI Assistant (e.g. ChatGPT)",
            "General-purpose chat, writing, and analysis",
            "Not connected to your company's Library, tables, or systems — files go in and results come out by hand"
          ],
          [
            "Basil AgentOS",
            "Understands tasks, calls tools, reads files & tables, produces downloadable work, remembers your preferences, runs on schedule",
            "You still make the final call — it's your partner, not your replacement"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Workbench is where all of this happens. It's not a web page with a chat box attached to the side. It's a complete workspace built from the ground up around one idea: "
          },
          {
            "text": "AI doing the work for you.",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "From \"Answering Questions\" to \"Delivering Work\"",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Unlike traditional AI assistants, Workbench doesn't just chat, answer questions, or give advice. You describe what you need in natural language — one sentence — and the Agent understands the goal, plans the steps, and executes complex multi-step tasks. Through Library file references, Base access, and Connector authorization, the Agent can read and process your files and data — automatically generating documents, analyzing spreadsheets, building slide decks, translating across languages, surfacing insights, and pulling information across systems."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "For even more complex tasks, the Agent breaks down the steps, uses Skills and system tools in parallel, and cuts the cost of switching between different tools, files, and tasks."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nState the goal → Read Library/Table data → Break down tasks & pick tools → Execute & produce output → Human review → Archive or publish"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "For example: "
          },
          {
            "text": "tell Workbench \"analyze the sales data in my Base and build a presentation deck.\" The Agent queries the data, understands the content, completes the analysis and summary, and generates a finished presentation you can view and edit. No manual data exports. No step-by-step instructions."
          }
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-02.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Workbench is built for "
          },
          {
            "text": "complete work tasks",
            "bold": true
          },
          {
            "text": ". Its core capability comes down to three things: it understands natural language, it can plan and reason on its own, and it actually delivers completed work."
          }
        ]
      }
    ]
  },
  {
    "id": "1-2-workbench-main-interface-workspace",
    "title": "1.2 Workbench Main Interface & Workspace",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet Basil AgentOS — Your New Work Partner",
    "index": 2,
    "prev": "1-1-meet-workbench-it-s-not-just-another-chat-box",
    "next": "1-3-your-first-task-in-seconds",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Workbench interface has three zones: the left sidebar for task management and navigation, the center conversation area for assigning and tracking tasks, and the right result panel for viewing files, changes, previews, and final output."
          }
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-03.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "table",
        "rows": [
          [
            "Zone",
            "Primary Use",
            "Check This When Using"
          ],
          [
            "Sidebar",
            "Create, search, switch, and manage tasks; access Library, Base, Explore, Settings",
            "Are you in the right task"
          ],
          [
            "Conversation area",
            "Describe what you need, add context, confirm goals and constraints",
            "Are goals and constraints complete"
          ],
          [
            "Result panel",
            "Review output, all files, changes, and previews",
            "Do file names, paths, and changes match expectations"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The difference between \"Task\" and \"Project\" in the sidebar comes down to whether you've set a \"Workspace\" directory."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A \"Workspace\" is a directory Workbench uses to organize tasks. Each task gets its own directory space where it can operate. Without a workspace directory, tasks run in the default installation directory, and conversations are saved under the \"Tasks\" folder."
          }
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-04.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You can also open the result panel from the left menu by clicking \"Task Outputs\" — it shows all outputs produced across every conversation task."
          }
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-05.png",
        "alt": "Playbook screenshot"
      }
    ]
  },
  {
    "id": "1-3-your-first-task-in-seconds",
    "title": "1.3 Your First Task in Seconds",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet Basil AgentOS — Your New Work Partner",
    "index": 3,
    "prev": "1-2-workbench-main-interface-workspace",
    "next": "1-4-drop-your-files-in",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Click "
          },
          {
            "text": "New Task",
            "bold": true
          },
          {
            "text": " in the left sidebar. That's it — no setup, no configuration. Just type what you need. Like talking to a coworker:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Summarize these meeting notes and pull out the action items.\""
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Translate this product description into English, French, and German.\""
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Look at this sell-out spreadsheet and tell me which SKUs sold best and slowest in each country.\""
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You can also use the "
          },
          {
            "text": "+",
            "bold": true
          },
          {
            "text": " menu next to the input box to add files, specify a Skill, or assign a Work. Everything you add becomes a "
          },
          {
            "text": "Context Tag",
            "bold": true
          },
          {
            "text": " in the message — the Agent knows exactly what you're talking about."
          }
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-06.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Don't bother if you don't want to — the default model handles most daily tasks just fine."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Bottom line: "
          },
          {
            "text": "You talk, Workbench works.",
            "bold": true
          },
          {
            "text": " No tab switching. No tool setup first."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Creating a Task in 4 Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Write your task description",
              "bold": true
            },
            {
              "text": " — like talking to a coworker. State the goal, input materials, constraints, and expected output."
            }
          ],
          [
            {
              "text": "Add attachments (optional)",
              "bold": true
            },
            {
              "text": " — upload files from the "
            },
            {
              "text": "+",
              "bold": true
            },
            {
              "text": " menu, or reference files from Library."
            }
          ],
          [
            {
              "text": "Send",
              "bold": true
            },
            {
              "text": " — watch the Agent's plan, tool calls, and file changes in real time."
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-07.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Review",
              "bold": true
            },
            {
              "text": " — preview the output in the result panel, confirm it's correct, then use it."
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-08.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 Safety tip: For your first time, work in a test folder in Library — a folder with copies of your files, not the originals. Watch what the Agent can access. Double-check your task description before working with real business data. Files can be opened locally, uploaded to the cloud, or shared — before sharing, make sure no sensitive or confidential information is exposed, and follow your company's sharing policy."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How to Write a Good Task Description",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The quality of your task description directly determines the quality of the Agent's output. A good description answers six questions:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "What to answer"
          ],
          [
            "Goal",
            "What problem are you solving"
          ],
          [
            "Input",
            "Which files, directories, or links to use"
          ],
          [
            "Action",
            "Analyze, organize, convert, or generate"
          ],
          [
            "Constraints",
            "What not to change, which standards to follow"
          ],
          [
            "Output",
            "What to deliver, where to put it"
          ],
          [
            "Acceptance",
            "What counts as done"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Good example:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Analyze this sell-out data, calculate the sell-through rate per SKU per country, sort by sell-through ascending, and output an Excel file with six columns: SKU ID, Product Name, Country, Units Sold, Stock on Hand, Sell-Through Rate. Don't modify the original data."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Bad example:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Analyze this spreadsheet."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The difference: a good description tells the Agent what to do, how to do it, what format to use, and what counts as done. A vague description makes the Agent guess — and the output may not match what you had in mind."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Starter Tasks",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Here are three beginner-friendly tasks, from easy to harder, to help you get started:"
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Starter A: Organize Files",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Goal: Organize files in a Library folder so they're easy to find by type.\nInput: The \"Test Files\" folder in Library.\nAction: Identify file types, propose a categorization and rename scheme.\nConstraints: Don't delete or overwrite original files; keep duplicates with a sequence number.\nOutput: First generate a file inventory table and a categorization plan.\nAcceptance: File count matches the actual folder, all actions are traceable.\nDon't move files until I confirm the plan."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Starter B: Generate Meeting Minutes (from your own typed notes — no recording software needed)",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Here are my typed notes from today's meeting — turn them into structured meeting minutes.\nMust include: conclusions, action items, owners, deadlines, and open questions.\nIf an owner or deadline isn't clear from the notes, write \"TBD\" — don't fill in guesses.\nOutput: a meeting minutes document and an action-item table.\nAcceptance: every conclusion is traceable to the notes; no action item is missing owner or status."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Starter C: Word to PPT",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Convert this project report Word doc into an internal presentation (10 slides max).\nAudience: department heads; presentation time: 8 minutes.\nKeep all facts and numbers from the original — don't add unverified data.\nStructure: background, current state, problems, solutions, plan, decisions needed.\nOutput: a PPT file plus a slide-by-slide content summary.\nAcceptance: each slide has one core idea, numbers match the original, body text is readable in projection mode."
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 Pro tip: The best way to learn Workbench is to use it. Pick a real task you're working on — a report to write, a spreadsheet to analyze, a document to summarize — and learn by doing. It's ten times more effective than following a generic tutorial."
          ]
        ]
      }
    ]
  },
  {
    "id": "1-4-drop-your-files-in",
    "title": "1.4 Drop Your Files In",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet Basil AgentOS — Your New Work Partner",
    "index": 4,
    "prev": "1-3-your-first-task-in-seconds",
    "next": "1-5-multidimensional-tables-structured-data-your-agent-can-work-with",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Next up in the left sidebar is "
          },
          {
            "text": "Library",
            "bold": true
          },
          {
            "text": " — your file hub inside Workbench."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Library isn't just a place to store files. It's how the Agent gets "
          },
          {
            "text": "file context",
            "bold": true
          },
          {
            "text": ". When you bring Library files into a conversation, Workbench can actually read them, understand them, and work with them."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What's in Library:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "My Space",
              "bold": true
            },
            {
              "text": " — your personal file storage"
            }
          ],
          [
            {
              "text": "Team Space",
              "bold": true
            },
            {
              "text": " — shared team folders"
            }
          ],
          [
            {
              "text": "Recent / Shared with Me / Favorites",
              "bold": true
            },
            {
              "text": " — quick access to what you need"
            }
          ],
          [
            {
              "text": "Search",
              "bold": true
            },
            {
              "text": " — find any file without digging through folders"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-09.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Library handles your "
          },
          {
            "text": "unstructured data",
            "bold": true
          },
          {
            "text": " — PDFs, images, videos, office documents. You can also tag files so you can filter by topic, project, or client later."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "When you attach Library files to a task, the Agent gets full file context. It can take the proposal you wrote for Client A and generate a version for Client B. Or grab a set of campaign photos and cut a video. No more digging through folders, uploading files, waiting for transfers — everything is in Library, ready for the Agent to use."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Library needs a one-time authorization in Explore (more on that later). After that, it's always in your left sidebar, one click away."
          }
        ]
      }
    ]
  },
  {
    "id": "1-5-multidimensional-tables-structured-data-your-agent-can-work-with",
    "title": "1.5 Base — Structured Data Your Agent Can Work With",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet Basil AgentOS — Your New Work Partner",
    "index": 5,
    "prev": "1-4-drop-your-files-in",
    "next": "1-6-install-your-first-skill",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Below Library is Base — the structured-data workspace built into Basil."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If you're an Excel power user — VLOOKUPs, pivot tables, complex models — keep using Excel for what it does best. Base aren't a replacement for it. They're where structured data lives inside Basil, so the Agent can query and update it directly. Here's what they add:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Capability",
            "Excel",
            "Basil Base"
          ],
          [
            "Store structured data",
            "✅",
            "✅"
          ],
          [
            "Store documents and images in a cell",
            "Limited",
            "✅"
          ],
          [
            "Extract structured data from unstructured content",
            "❌",
            "✅"
          ],
          [
            "Filters, views, conditional queries",
            "✅ (filters, pivot tables)",
            "✅ — plus saved views shareable as links"
          ],
          [
            "Connected to your AI Agent",
            "❌",
            "✅ — the Agent queries tables directly and returns results"
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-10.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The real magic happens when tables meet conversation. Tell the Agent \"check the product table and list everything with stock below 10\" — it queries the table, returns results, and even embeds a live preview in the conversation."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Like Library, Base are embedded from the original Basil system. Authorize once, and they stay in your left sidebar."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Turning a pile of product photos into a structured spec sheet — that kind of real-world scenario comes later in the playbook."
          }
        ]
      }
    ]
  },
  {
    "id": "1-6-install-your-first-skill",
    "title": "1.6 Install Your First Skill",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet Basil AgentOS — Your New Work Partner",
    "index": 6,
    "prev": "1-5-multidimensional-tables-structured-data-your-agent-can-work-with",
    "next": "1-7-connect-your-first-service",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This is where Workbench gets interesting."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What is a Skill?",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The simplest way to think about it: a Skill is like an app on your phone."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Your phone ships with basic capabilities — calling, texting. But if you want to order food, watch videos, or book a ride, you install apps. Apps aren't built into the system, but once installed, your phone can do more."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Workbench Agent works the same way. It comes with built-in capabilities — reading files, writing text, querying tables. But if you want it to:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Write product descriptions using our brand voice"
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Search Library and return results in a specific format"
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Auto-link product IDs and names when querying tables"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "That \"how to do a specific thing\" knowledge is a Skill. Think of it as a "
          },
          {
            "text": "job description",
            "bold": true
          },
          {
            "text": " for your AI coworker — telling it how to handle a certain type of task, which tools to use, and what format to deliver."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A Skill is essentially a folder. At minimum, it contains a SKILL.md file that tells the Agent what to do. It can also include scripts, templates, and reference materials. We'll get into the technical details later. For now, just remember: "
          },
          {
            "text": "Skill = a reusable way of doing things.",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Installing a Skill from Explore",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Open "
          },
          {
            "text": "Explore",
            "bold": true
          },
          {
            "text": " in the left sidebar — it's like an app store, but instead of apps, it installs AI capabilities."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Installing a Skill takes three steps:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Browse",
              "bold": true
            },
            {
              "text": " — open Explore and see what's available"
            }
          ],
          [
            {
              "text": "Install",
              "bold": true
            },
            {
              "text": " — click Add, confirm, done"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-11.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Use",
              "bold": true
            },
            {
              "text": " — the Skill loads automatically into the Agent's context. Next time you start a task, Workbench already knows how to handle it"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-12.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You can toggle Skills on and off anytime. Not using one? Turn it off — it won't take up the Agent's \"brain space.\" Turn it back on when you need it."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Your Agent comes with one built-in Skill that can't be uninstalled: "
          },
          {
            "text": "Explore Skill",
            "bold": true
          },
          {
            "text": ". When you tell the Agent what you need in conversation, it finds the right Skill or Connector for you. No manual searching."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skill vs. Prompt — What's the Difference",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This is the most important distinction."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Dimension",
            "Prompt",
            "Skill"
          ],
          [
            "Core purpose",
            "Describe the current task",
            "Define how to do a class of tasks"
          ],
          [
            "Lifespan",
            "Usually one-off",
            "Long-term reusable"
          ],
          [
            "Trigger",
            "User types it in",
            "Agent auto-selects, or user explicitly invokes"
          ],
          [
            "Format",
            "Mostly text",
            "Folder (instructions + scripts + references + templates)"
          ],
          [
            "Context usage",
            "Usually goes straight into context",
            "Loaded on demand, doesn't take space when not in use"
          ],
          [
            "Reusability",
            "Copy-paste every time",
            "Natively reusable"
          ],
          [
            "Sharing",
            "Send text",
            "Full capability package, shareable with the team"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Simplest version:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Prompt = task\nSkill = method"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example: Every time you ask the Agent to write a product description, you repeat the same thing — \"use our brand voice, include fabric composition, add care instructions, format for SEO, three languages.\" Make that a Skill, and next time you just say \"write product descriptions for these SKUs.\" The brand guide, format, and language requirements are all handled automatically."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One step further: your team's workflows — how to look up product info, write descriptions, run competitive analysis — can all become Skills. One person's experience becomes the whole team's capability. That's the upgrade from \"personal prompt\" to "
          },
          {
            "text": "organizational capability asset",
            "bold": true
          },
          {
            "text": "."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skills are the first step to making Workbench "
          },
          {
            "text": "yours",
            "bold": true
          },
          {
            "text": ". We'll walk through building your own Skills later in this playbook."
          }
        ]
      }
    ]
  },
  {
    "id": "1-7-connect-your-first-service",
    "title": "1.7 Connect Your First Service",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet Basil AgentOS — Your New Work Partner",
    "index": 7,
    "prev": "1-6-install-your-first-skill",
    "next": "1-8-getting-more-like-your-actual-personal-assistant",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skills tell the Agent "
          },
          {
            "text": "how to do things",
            "bold": true
          },
          {
            "text": ". Connectors give it "
          },
          {
            "text": "a channel to the outside world",
            "bold": true
          },
          {
            "text": "."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What is a Connector?",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If Skills are apps for the Agent, Connectors are the data cables to external services."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If you want the Agent to:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Read supplier emails from Outlook / Gmail"
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Create meetings in Google Calendar"
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Call your company's internal API"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Those external services need a Connector."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Connectors are built on MCP (Model Context Protocol) — think of it as the \"USB-C\" of the AI world. Tool developers build to the standard, Workbench plugs in, no custom integration code needed. We'll dive into MCP principles later in the Agent architecture section."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Installing and Authorizing a Connector",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "H"
          },
          {
            "text": "ere's how it works:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Find",
              "bold": true
            },
            {
              "text": " — browse Connectors in Explore. The Connector catalog is managed by your IT admin — Connectors need IT approval before they're available, so if one you need isn't there, request it through IT"
            }
          ],
          [
            {
              "text": "Install",
              "bold": true
            },
            {
              "text": " — click to add to your Agent"
            }
          ],
          [
            {
              "text": "Authorize",
              "bold": true
            },
            {
              "text": " — connect via OAuth to your Outlook or Gmail account (Workbench never stores your raw password)"
            }
          ],
          [
            {
              "text": "Bind",
              "bold": true
            },
            {
              "text": " — some Skills need a Connector to work. You pick which one fits"
            }
          ],
          [
            {
              "text": "Use",
              "bold": true
            },
            {
              "text": " — your Agent can now call that Connector in tasks"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A few key things:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Each user gets "
            },
            {
              "text": "one Connection",
              "bold": true
            },
            {
              "text": " per Connector. Switching accounts? Re-authorize — it replaces the old one"
            }
          ],
          [
            {
              "text": "Disconnect anytime — Workbench cleanly revokes access"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Connector vs. Skill",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Dimension",
            "Skill",
            "Connector"
          ],
          [
            "Core purpose",
            "Tells the Agent how to do a type of task",
            "Gives the Agent a channel to external services"
          ],
          [
            "Analogy",
            "App (provides a capability)",
            "Cable (connects to the outside)"
          ],
          [
            "Output",
            "Instructions, scripts, templates",
            "Read/write access to external data"
          ],
          [
            "Typical examples",
            "Brand writing guide, data query format",
            "Outlook, Gmail, Google Calendar, Slack"
          ],
          [
            "Dependency",
            "Some Skills need a Connector to work",
            "Connectors stand alone, called by Skills or tasks"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A typical combo: install an \"Email Follow-up\" Skill that needs an Outlook or Gmail Connector. The Skill tells the Agent \"how to process emails, what fields to extract, which table to write to.\" The Connector provides \"read inbox, send email.\" Together, they complete the workflow from email to structured data."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Connectors are what turn Workbench from a \"smart assistant\" into a "
          },
          {
            "text": "true integration platform",
            "bold": true
          },
          {
            "text": ". We'll cover specific setups and real-world examples in a dedicated chapter."
          }
        ]
      }
    ]
  },
  {
    "id": "1-8-getting-more-like-your-actual-personal-assistant",
    "title": "1.8 Getting More Like Your Actual Personal Assistant",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet Basil AgentOS — Your New Work Partner",
    "index": 8,
    "prev": "1-7-connect-your-first-service",
    "next": "1-9-what-basil-can-and-can-t-do",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The more you use Workbench, the more it knows you — thanks to "
          },
          {
            "text": "Memory",
            "bold": true
          },
          {
            "text": "."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Memory stores your "
          },
          {
            "text": "User Profile",
            "bold": true
          },
          {
            "text": " — your role, preferences, work habits, all the \"always do it this way\" instructions you've given Workbench. It's not chat history. It's a living, structured, growing personal profile."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How it updates:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Automatic:",
              "bold": true
            },
            {
              "text": " Every day, Workbench aggregates all your tasks and updates the profile automatically"
            }
          ],
          [
            {
              "text": "Manual:",
              "bold": true
            },
            {
              "text": " Type a sentence at the bottom of the Memory page — \"remember to use formal tone for all client-facing content\" or \"forget the old brand guide\" — Workbench processes it and updates immediately"
            }
          ],
          [
            {
              "text": "Transparent:",
              "bold": true
            },
            {
              "text": " You can view the full profile anytime. It's read-only — you can't edit it directly, but you can always ask Workbench to change or delete something"
            }
          ],
          [
            {
              "text": "Versioned:",
              "bold": true
            },
            {
              "text": " Every change creates an immutable new version. Use the calendar heatmap and side-by-side diff view to see how your profile evolves over time"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Memory Follows You, Not Your Session",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Key point: Memory is tied to your user account, not to a specific session or project."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What this means:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "You might think",
            "What actually happens"
          ],
          [
            "Switch sessions, memory resets",
            "No — memory works across sessions"
          ],
          [
            "Switch projects, preferences reset",
            "No — memory works across projects"
          ],
          [
            "Each session has its own profile",
            "No — you have one profile"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Specifically:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Cross-session:",
              "bold": true
            },
            {
              "text": " You tell Workbench in Session A \"use formal tone for client content.\" In Session B, it still knows. The system aggregates all your tasks daily (across all sessions and tasks) and updates the same profile. Work from different sessions is all included in the daily summary — there's no \"this preference only works in this session.\""
            }
          ],
          [
            {
              "text": "Cross-project:",
              "bold": true
            },
            {
              "text": " Projects are what you see grouped in the sidebar, but memory doesn't split by project. Preferences formed in Project A apply in Project B. You always have one user profile, and the daily summary collects data across all workspaces and projects."
            }
          ],
          [
            {
              "text": "Manual updates are global too:",
              "bold": true
            },
            {
              "text": " When you submit an update on the Memory page — \"remember to use Chinese for all my reports\" — it doesn't belong to any session, task, or workspace. Once written, it applies to all subsequent sessions and projects."
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-13.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Bottom line: "
          },
          {
            "text": "Memory and preferences are tied to you, not to whatever window you have open.",
            "bold": true
          },
          {
            "text": " No matter which session or project you're working in, Workbench knows you."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Who Can See Your Profile",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Your profile is "
          },
          {
            "text": "visible only to you",
            "bold": true
          },
          {
            "text": "."
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Tenant admins can't read your profile content through the product interface"
            }
          ],
          [
            {
              "text": "System audit logs record update time, source type, result, and version number — not profile content"
            }
          ],
          [
            {
              "text": "Workbench only stores what you explicitly provide or what can be objectively identified from your work behavior — no sensitive data, no passwords, no guessing"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The result: the more you use it, the less you need to repeat yourself. \"I'm in marketing, I need English and Italian, I prefer concise bullet points\" — Workbench just knows."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "At this point, it stops feeling like a tool and starts feeling like "
          },
          {
            "text": "a real assistant",
            "bold": true
          },
          {
            "text": "."
          }
        ]
      }
    ]
  },
  {
    "id": "1-9-what-basil-can-and-can-t-do",
    "title": "1.9 What Basil Can and Can't Do",
    "chapterId": "chapter-1-meet-basil-agentos-your-new-work-partner",
    "chapterTitle": "Chapter 1 · Meet Basil AgentOS — Your New Work Partner",
    "index": 9,
    "prev": "1-8-getting-more-like-your-actual-personal-assistant",
    "next": "scenario-1-email-management-structured-follow-ups",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Let's be honest. Basil is powerful, but it's not magic. Here's the real talk:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Basil Can ✅",
            "Basil Can't ❌"
          ],
          [
            "Understand natural language tasks and execute them with tools",
            "Make creative or business decisions for you — it produces drafts and options, you make the call"
          ],
          [
            "Read Library files and use them to get work done",
            "Post to social media on your behalf — it writes the copy, you hit publish"
          ],
          [
            "Query Base and return structured results",
            "Replace professional judgment — compliance, legal, and technical specs still need a human"
          ],
          [
            "Install Skills to gain new capabilities",
            "Guarantee 100% accuracy — AI can hallucinate. Always review before using"
          ],
          [
            "Call external services through Connectors",
            "Monitor your behavior — Memory stores work preferences, not performance metrics"
          ],
          [
            "Remember your preferences and work habits",
            "Bind multiple accounts to the same Connector (not yet) — one connection per Connector per user"
          ],
          [
            "Produce downloadable files, formatted documents, and data tables",
            "Replace your data verification — AI-extracted data needs human review; final approval is by authorized personnel"
          ],
          [
            "Preview results in the side panel next to the conversation",
            "Guarantee identical previews across all devices — always do a final check on the target device"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If a task fails or the output is wrong, Workbench tells you exactly which step, which tool, and what went wrong. No black box."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If you're thinking this could save you a few hours a week — you're right. Next steps:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "No Workbench account yet?",
              "bold": true
            },
            {
              "text": " — Contact your IT admin or team lead"
            }
          ],
          [
            {
              "text": "Already have an account?",
              "bold": true
            },
            {
              "text": " — Open Workbench, click New Task, try something. The best way to learn Workbench is to use it"
            }
          ],
          [
            {
              "text": "Want the full walkthrough?",
              "bold": true
            },
            {
              "text": " — Keep reading. Next chapter takes you through your first real conversation step by step"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 Pro tip: Before moving to the next chapter, pick a real work task you're dealing with — a report to write, a spreadsheet to analyze, a document to summarize. Learning Workbench with a real task is ten times more effective than following a generic tutorial."
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Next chapter: Chapter 2 · Office Work, Solved →"
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-1-email-management-structured-follow-ups",
    "title": "Scenario 1: Email Management & Structured Follow-ups",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 10,
    "prev": "1-9-what-basil-can-and-can-t-do",
    "next": "scenario-2-document-summarization-translation",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You get 10+ supplier emails a day, each with a Tech Pack PDF, product images, or a quote. Information is scattered across your inbox — untrackable, unqueryable. A general-purpose AI assistant can help you draft replies, but it isn't connected to your inbox or your tables — you'd still move everything in and out by hand. Workbench turns key information from emails directly into structured records in a Base."
          }
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-14.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What you can do:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Read Outlook / Gmail inbox emails, extract key info (supplier/order/amount/delivery date) and write it to a Base"
            }
          ],
          [
            {
              "text": "Auto-extract email attachments (images/PDFs/Excel files), save them to Library with tags"
            }
          ],
          [
            {
              "text": "Draft multi-language email replies, confirm, then send — all from Workbench"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "In Explore, install the Outlook or Gmail Connector and authorize it (Connectors are enabled and approved by your IT admin — ask IT if it isn't listed)"
            }
          ],
          [
            {
              "text": "Tell the Agent which emails to process, what fields to extract, and which table to write to"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-15.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "The Agent reads the emails, extracts the data, and creates structured records"
            }
          ],
          [
            {
              "text": "Attachments are saved to Library automatically, linked to the table records"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-16.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Need to reply? State your key points and language — the Agent drafts the email"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-17.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Confirm, send — all inside Workbench"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Read the last 10 supplier emails from my inbox. Extract the following and write to a Base: supplier, email date, order number, amount, key request, attachment list. Save any images from attachments to Library, named \"supplier_order_date\" and tagged \"supplier email.\""
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "10 emails → one structured Base"
            }
          ],
          [
            {
              "text": "Attached images saved to Library, searchable by supplier/order"
            }
          ],
          [
            {
              "text": "Later, you can just ask the Agent \"What did Hartmann send this week?\" and get the answer from the table"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-18.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario 1-A: Customer Service — Batch Complaint Email Follow-ups",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You're a customer service lead. Your team gets 20+ complaint emails a day, each with attached photos (quality issue shots). Information is scattered across individual inboxes — you can't spot trends, you can't track progress."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, the Agent batch-reads complaint emails, auto-classifies and rates severity, files images to Library, and writes everything to a trackable Base."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Read the last 20 complaint emails from my inbox. Extract and write to a Base: customer name, order number, complaint type (quality/logistics/sizing/other), issue description, severity (P1-P3), attached images, handling status, assignee. Requirements: 1. Auto-classify complaint type by analyzing email body keywords; 2. Auto-rate severity (P1 = batch impact/escalation, P2 = single-item issue, P3 = general inquiry); 3. Auto-save attached images to Library, named \"customer_order_number.\""
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "20 scattered emails → one structured Base in 30 seconds"
            }
          ],
          [
            {
              "text": "Complaint images auto-filed in Library, searchable by customer/order"
            }
          ],
          [
            {
              "text": "Supervisors can spot trends directly from the table: \"Quality complaints are up this month\""
            }
          ],
          [
            {
              "text": "Downstream: the Agent can reference \"Hartmann's complaint photos\" in later conversations — no more digging through emails"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario 1-B: Project Manager — Supplier Emails + Attachments → Project Tracking Table",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You're a project manager. 10+ supplier emails a day, each with a Tech Pack PDF, product images, or sample photos. Information lives in your inbox. When you meet with the team, you're digging through emails."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, the Agent reads recent supplier emails, auto-extracts key info and attachments, and writes to a project tracking table grouped by supplier."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Read supplier emails from my inbox (last 7 days). Extract and write to a project tracking Base: supplier, project/style number, email subject, email date, key content summary, attachment list, attachment type, sampling stage, action needed, deadline. Requirements: 1. Auto-classify attachments: Tech Pack PDFs → extract key parameters (fabric/size/color) into the table; 2. Product images → save to Library, named \"supplier_style_date\"; 3. Highlight the \"action needed\" column so it's easy to review in meetings."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Scattered supplier emails → one project tracking table grouped by supplier"
            }
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Tech Pack parameters are no longer buried in PDFs — they're queryable in the table"
            }
          ],
          [
            {
              "text": "Sample photos auto-filed in Library, linked to the supplier row"
            }
          ],
          [
            {
              "text": "Project manager asks Workbench: \"What did Hartmann send this week? How's the progress?\" → the Agent answers from the table"
            }
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Downstream: Friday's weekly report auto-pulls table data to generate a progress update"
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-2-document-summarization-translation",
    "title": "Scenario 2: Document Summarization & Translation",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 11,
    "prev": "scenario-1-email-management-structured-follow-ups",
    "next": "scenario-3-data-analysis-insights",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A supplier sends a 30-page English technical document. You don't have time to read it, and it's hard to follow anyway. An AI assistant can summarize it, but the output stays in the conversation. Workbench saves the summary to Library, where it can be referenced by weekly reports, search, and other Skills."
          }
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/scenario2-restored-01.png",
        "alt": "Scenario 2 document summarization screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Extract the document from the email and save it to Library, or upload it directly in the conversation"
            }
          ],
          [
            {
              "text": "Tell the Agent what language you want the summary in and what dimensions to focus o"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/scenario2-restored-02.png",
        "alt": "Scenario 2 document summarization screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "The Agent pulls out the core points (with page references) and translates them"
            }
          ],
          [
            {
              "text": "The summary is saved to the right Library folder with tags"
            }
          ],
          [
            {
              "text": "Later, any task can reference that summary"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Summarize this 30-page supplier technical document into 5 core points in Italian, each with the original page number. Focus on: fabric specs, certification standards, delivery terms. Save the result to the \"Supplier Documents\" folder in Library."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "5 core points, each with the original page number for traceability"
            }
          ],
          [
            {
              "text": "Translated into the specified language with accurate terminology"
            }
          ],
          [
            {
              "text": "A brief analysis report highlighting key info and terms to watch"
            }
          ],
          [
            {
              "text": "Summary saved to the right Library folder, ready to be referenced by future tasks"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/scenario2-restored-03.png",
        "alt": "Scenario 2 document summarization screenshot"
      }
    ]
  },
  {
    "id": "scenario-3-data-analysis-insights",
    "title": "Scenario 3: Data Analysis & Insights",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 12,
    "prev": "scenario-2-document-summarization-translation",
    "next": "scenario-4-storytelling-ppt-html-generation-production",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You have sales data, inventory data, and supplier cost data, scattered across different Base. Field names don't match, formats differ, languages differ. A regular AI assistant can only analyze one Excel file you upload manually. Workbench can connect multiple data sources from Base simultaneously — it auto-cleans data, maps fields, and runs cross-source analysis."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skills involved:",
            "bold": true
          },
          {
            "text": "data-cleaning"
          },
          {
            "text": " (turns messy raw data — inconsistent formats, missing values, errors — into clean, analysis-ready tables); "
          },
          {
            "text": "analysis-methodology"
          },
          {
            "text": " (provides reusable analysis methods for competitive, product, channel, marketing, user, sales, operations, and strategy scenarios — turning retail questions like best-sellers, sell-through, replenishment, assortment, and next-season planning into data-backed reports)"
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Make sure data sources are in Base (sales table, inventory table, supplier table, etc.)"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-22.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Tell the Agent what to analyze and which tables to pull from"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-23.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "The Agent auto-queries multiple tables and identifies field mappings"
            }
          ],
          [
            {
              "text": "Merges data and runs analysis (trends, rankings, anomalies, margin, etc.)"
            }
          ],
          [
            {
              "text": "Results are written back to the Base or formatted as an analysis report"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-24.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-25.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-26.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "From the \"E-commerce Sales\" table and the \"Inventory\" table, calculate the sell-through rate by SKU per country. Rank SKUs by sell-through ascending and write to a \"Sell-Through Analysis\" Base. Also generate a brief analysis report identifying the 10 slowest-selling SKUs and possible reasons."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Sell-through analysis written to the Base, sorted ascending"
            }
          ],
          [
            {
              "text": "The slowest-selling SKUs per country are clearly listed"
            }
          ],
          [
            {
              "text": "Analysis report identifies the 5 lowest-margin SKUs with possible reasons"
            }
          ],
          [
            {
              "text": "Later, you can ask the Agent to drill into any SKU's details"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If you have multiple data sources from different systems — SAP sales CSV, Magento e-commerce Excel, supplier quotes in Italian — field names don't match, formats differ, languages differ. Just aligning the fields takes half a day."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, you hand all the data to the Agent. AI auto-identifies field mappings, cleans the data, merges it into one unified table, and gives you a clean data foundation for analysis."
          }
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-27.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Upload each dataset to a Base or reference it through Library"
            }
          ],
          [
            {
              "text": "Tell the Agent what each dataset is and ask it to auto-identify field mappings"
            }
          ],
          [
            {
              "text": "The AI shows you the field mappings (e.g. SAP's \"Product Code\" = supplier's \"Codice\"), you confirm"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-28.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "The AI runs data cleaning: deduplication, date format unification, currency normalization, missing value annotation, anomaly detection"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-29.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "The cleaned, merged data is written back to the Base, ready for analysis"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-30.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Here are three datasets: SAP store sales (fields in English: Store_ID, Product Code, Revenue, Date), Magento online orders (fields in English: Product Code, Total order, Discount, Revenue), and supplier product costs (fields in Italian: Codice, Prezzo, Categoria). Auto-identify field mappings between these datasets — fields that mean the same thing but have different names — and show me the mapping for confirmation. After confirmation, clean the merged data: 1) Deduplicate and mark duplicate records; 2) Unify dates to YYYY-MM-DD, amounts to EUR; 3) Mark missing values and suggest how to handle them; 4) Detect anomalies and flag them. Write the cleaned merged data back to a Base."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Field mapping inventory: AI auto-identifies field mappings across the three datasets"
            }
          ],
          [
            {
              "text": "Cleaned merged table: deduplicated, format-normalized, missing values annotated, anomalies flagged"
            }
          ],
          [
            {
              "text": "Data quality report: number of duplicate records, missing value distribution, anomaly list"
            }
          ],
          [
            {
              "text": "Merged data written back to the Base — ready for analysis without re-cleaning"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Data cleaning is the prerequisite for analysis. If the data is wrong, no analysis — no matter how good — can fix it. Let AI handle the alignment and cleaning. You just confirm the mappings and rules. Want to know what to do with the cleaned data? → See Chapter 3, Scenario 8: \"Merchandise Planning: Product Operations Analysis & Inventory Risk Alerts.\""
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-4-storytelling-ppt-html-generation-production",
    "title": "Scenario 4: Storytelling — PPT/HTML Generation & Production",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 13,
    "prev": "scenario-3-data-analysis-insights",
    "next": "scenario-5-fashion-industry-news-inspiration-search",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You need a project presentation or a data report. Generic AI tools pull from generic templates. Workbench pulls your real data from Base and your brand assets from Library. AI builds the narrative arc (discover → analyze → recommend) and delivers a downloadable, editable PPT or a presentation-ready HTML file."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skills involved:",
            "bold": true
          },
          {
            "text": "presentation-maker"
          },
          {
            "text": " (auto-plans, writes, generates, and validates professional PPTX presentations from your topic, content, or visual direction — no PowerPoint required); "
          },
          {
            "text": "single-html-generator"
          },
          {
            "text": " (turns your content or data into a single, interactive, shareable web page — no PPT needed, just a link)"
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Make sure the data you need is in Base and assets are in Library"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-31.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-32.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Tell the Agent the audience, duration, structure, and output format"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-33.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "The Agent pulls data from tables and brand PPT templates from Library (or you upload directly)"
            }
          ],
          [
            {
              "text": "AI builds the narrative framework: background → current state → problem → solution → plan"
            }
          ],
          [
            {
              "text": "Outputs a PPT or HTML file, one core idea per slide"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-34.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Based on the Q3 sales data in the Base and the brand PPT template in Library, generate an 8-minute internal presentation. Audience: department heads. Structure: background, current state, problems, solutions, plan, decisions needed. Use the color and font specs from the brand-guide.pdf in Library. One core idea per slide. Numbers must match the data source."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "A PPT or HTML file, one core idea per slide"
            }
          ],
          [
            {
              "text": "Data from Base, brand assets from Library — not generic templates"
            }
          ],
          [
            {
              "text": "Complete narrative arc: background → current state → problems → solutions → plan → decisions needed"
            }
          ],
          [
            {
              "text": "Downloadable PPT for editing"
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-5-fashion-industry-news-inspiration-search",
    "title": "Scenario 5: Fashion Industry News & Inspiration Search",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 14,
    "prev": "scenario-4-storytelling-ppt-html-generation-production",
    "next": "scenario-6-personal-folder-organization",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Generic search engines give you one answer at a time, but the source isn't guaranteed, timeliness isn't assured, and there's no scheduled tracking. Workbench's fashion industry search uses a curated source list (WWD, Vogue Business, Drapers, Sourcing Journal), routes to a dedicated search Skill, and writes structured results to a Base."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skills involved:",
            "bold": true
          },
          {
            "text": "web-search"
          },
          {
            "text": " (searches the web for the latest information, gives you summaries and source links — saves you from opening each page yourself); "
          },
          {
            "text": "fashion-inspiration-skill"
          },
          {
            "text": " (advanced: uses Apify to scrape Instagram, Pinterest, or any website for fashion images on a schedule — AI auto-classifies by style, color, fabric, category — delivers a shareable inspiration board HTML every morning); "
          },
          {
            "text": "single-html-generator"
          },
          {
            "text": " (turns search results into an HTML brief)"
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Tell the Agent what topic to search and which sources to use"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-35.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "The Agent searches from the curated source list and extracts key information"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-36.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Results are structured and written to a Base by topic/date/source"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-37.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Need scheduled tracking? Set it as a recurring task (e.g. auto-run every morning)"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Search the past week's industry news about \"sustainable fabrics.\" Limit sources to WWD, Vogue Business, Drapers. For each result, extract: title, source, date, key insight, relevance to us (high/medium/low). Write to an \"Industry News\" Base."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Advanced: Scheduled Inspiration Scraping",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Designers spend 1-2 hours a day browsing Instagram and Pinterest for inspiration. Use Apify to scrape specified brands/styles on a schedule. By the time designers get to the office, the inspiration board is ready."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Set up a designer inspiration scraper: brands = Ralph Lauren, Diesel, Guess; channels = Instagram and Pinterest; schedule = daily at 7:00 AM; focus on: new launches, runway looks, street style, color trends. Save results to the Library inspiration folder."
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-38.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-39.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Structured news written to a Base: title, source, date, key insight, relevance"
            }
          ],
          [
            {
              "text": "Sources limited to a curated list — results are trustworthy and traceable"
            }
          ],
          [
            {
              "text": "Once set as a recurring task, it runs daily — no manual trigger needed"
            }
          ],
          [
            {
              "text": "Inspiration images auto-saved to Library — designers see them when they arrive"
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-6-personal-folder-organization",
    "title": "Scenario 6: Personal Folder Organization",
    "chapterId": "chapter-2-office-work-solved-ai-handles-one-task-at-a-time",
    "chapterTitle": "Chapter 2 · Office Work, Solved — AI Handles One Task at a Time",
    "index": 15,
    "prev": "scenario-5-fashion-industry-news-inspiration-search",
    "next": "scenario-1-hr-jd-generation-resume-screening-candidate-management",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Files in Library pile up. Naming is inconsistent, categories are outdated, the folder structure gets messy. Workbench can analyze your folder structure, suggest improvements, and batch-manage, create, or rename folders."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skill involved:",
            "bold": true
          },
          {
            "text": "assets"
          },
          {
            "text": " (provides enterprise digital asset management through the Library OpenAPI — supports Library folder browsing, structured search, file upload, and rename/move/replace/delete operations for files and folders)"
          }
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-40.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Steps:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Specify which Library folder to organize"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-41.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "The Agent scans the folder structure and file names"
            }
          ],
          [
            {
              "text": "Analyzes current issues: inconsistent naming, poor subfolder hierarchy, outdated structure"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-42.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Suggests improvements (categorization scheme, naming convention, folder structure changes)"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-43.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "After confirmation, batch-executes: rename files, create subfolders, move files to new categories"
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/playbook-images/docx-image-44.png",
        "alt": "Playbook screenshot"
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example prompt:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Organize the \"2026SS Product Images\" folder in Library. Scan all files and check: 1) Whether naming follows the convention \"category_SKU_color_date\"; 2) Whether the subfolder hierarchy makes sense; 3) Whether any files are in the wrong folder. Propose a folder optimization plan (new subfolders, rename suggestions, file move suggestions). Don't execute until I confirm. Don't delete any original files."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Expected results:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Folder optimization plan: new subfolder suggestions, rename suggestions, file move suggestions"
            }
          ],
          [
            {
              "text": "After confirmation, batch execution: consistent file naming, clean subfolder structure"
            }
          ],
          [
            {
              "text": "No original files deleted — all operations traceable"
            }
          ],
          [
            {
              "text": "Future uploads follow the new structure, and the Agent can auto-classify them"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Next chapter: Chapter 3 · Role-Specific Scenarios →"
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-1-hr-jd-generation-resume-screening-candidate-management",
    "title": "Scenario 1 · HR: JD Generation, Resume Screening & Candidate Management",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 16,
    "prev": "scenario-6-personal-folder-organization",
    "next": "scenario-2-legal-supplier-contract-review-template-generation-expiry-tracking",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're a recruiter or an HRBP, the hiring flow is the same:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Write JD",
            "Copy from old JDs, reformat for each channel",
            "Multilingual, multi-format adaptation takes time"
          ],
          [
            "2. Screen resumes",
            "Open each one, score manually",
            "Low efficiency at volume, easy to miss candidates"
          ],
          [
            "3. Manage candidates",
            "Excel tracking, easy to forget follow-ups",
            "Candidates go cold after a week without contact"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, these three steps happen in one platform. Data flows automatically. No tool switching."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: HR Scenario Stack",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Base",
            "Candidate data management, JD management, ranking table",
            "Throughout the chapter — all structured data goes into tables",
            "Set up the table structure first"
          ],
          [
            "JD Generation Skill",
            "Multi-language JD writing, channel format adaptation",
            "Scenario A",
            "Confirm implementation with the product team"
          ],
          [
            "Resume Parsing Skill",
            "Batch resume parsing, quantify-scoring on JD match, auto-ranking, full candidate assessment workflow",
            "Scenario B",
            "Resumes must be uploaded to Workbench"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: JD Generation — One Role, Multiple Languages & Formats in One Click",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"One role needs to go on LinkedIn, Indeed, Glassdoor, and our website. Each channel has a different format. Plus it needs Italian and English versions. Every time I spend half an hour reformatting.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Prepare the role info",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Tell the AI the following elements:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "Description",
            "Example"
          ],
          [
            "Role name",
            "In English and local language",
            "Senior Merchandiser"
          ],
          [
            "Level",
            "Junior / Mid / Senior",
            "Senior"
          ],
          [
            "Core responsibilities",
            "3-5 items",
            "Merchandise planning, SKU analysis, seasonal buying plan"
          ],
          [
            "Requirements",
            "Hard requirements",
            "5+ years fashion industry, fluent Italian and English"
          ],
          [
            "Nice-to-haves",
            "Preferred conditions",
            "Luxury brand experience, SAP knowledge"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Specify output requirements",
              "bold": true
            }
          ],
          [
            {
              "text": "Languages: Italian + English"
            }
          ],
          [
            {
              "text": "Channel formats: LinkedIn / Indeed / Glassdoor / Company website"
            }
          ],
          [
            {
              "text": "Special requirements: Exclude discriminatory language, generate formal and social-media versions"
            }
          ],
          [
            {
              "text": "AI generates the JDs",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI creates multiple versions based on your input."
            }
          ],
          [
            {
              "text": "Review and write to the Base",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "After confirming, the AI writes the JDs to the table for easy management and publishing."
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nGenerate Italian + English JDs for the following role:\n- Role: Senior Merchandiser\n- Level: Senior\n- Core responsibilities: Merchandise planning, SKU four-quadrant analysis, seasonal buying plan development\n- Requirements: 5+ years fashion industry, fluent Italian and English, proficient in data analysis tools\n- Nice-to-haves: Luxury brand experience, SAP knowledge\n\nOutput requirements:\n1. Adapt for LinkedIn / Indeed / Glassdoor / Company website — four channel formats\n2. Exclude discriminatory language (age/gender/race/religion/marital status, compliant with EU Anti-Discrimination Directive 2000/78/EC)\n3. Generate formal and social-media short versions\n4. Write all versions to the Base"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "2 languages × 4 channels (LinkedIn / Indeed / Glassdoor / Website) × 2 versions = "
            },
            {
              "text": "16 JDs",
              "bold": true
            }
          ],
          [
            {
              "text": "All written to the Base, organized by channel and language"
            }
          ],
          [
            {
              "text": "Ready to copy and publish directly from the table"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "PS: When generating JDs for multiple roles at once, start with one role, confirm quality, then batch the rest. Batch results are written to the same table."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Resume Screening & Matching — 100 Resumes, Ranked in 3 Minutes",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"200 resumes for one role. If I spend 5 minutes on each, that's 16 hours of screening. And I still miss great candidates.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Upload resumes",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Upload a batch of resumes (PDF/Word) to the Workbench conversation."
            }
          ],
          [
            {
              "text": "AI auto-parses",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI reads each resume and extracts key info:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Field",
            "Description"
          ],
          [
            "Name",
            "Full name"
          ],
          [
            "Experience",
            "Total years of work"
          ],
          [
            "Skills",
            "Industry tools, professional skills, software"
          ],
          [
            "Languages",
            "Languages and proficiency"
          ],
          [
            "Last employer",
            "Most recent company"
          ],
          [
            "Current role",
            "Most recent job title"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Input job requirements, AI scores the match",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Tell the AI which role you're hiring for. It calculates a match score (0-100) for each candidate and ranks them."
            }
          ],
          [
            {
              "text": "Results written to the Base",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The match ranking table goes into the table. Hiring managers can view, filter, and sort. Original resume files (PDF/Word) can also be linked to the corresponding records."
            }
          ],
          [
            {
              "text": "Natural language follow-up queries",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "You can filter candidates directly with natural language:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nList all candidates with 3+ years luxury experience, Italian B2 or above, currently in Milan. Sort by match score descending."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nParse the following resumes, extract key info (name, experience years, skills, languages, education, current role).\nMatch against the following job requirements:\n- Role: Senior Merchandiser\n- Requirements: 5+ years fashion industry, Italian native or C1+, English B2+, proficient in Excel and data analysis tools\n\nGenerate a match ranking table (0-100 points), write to the Base, including:\nName, Experience years, Current role, Last employer, Skills, Languages, Match score, Rank.\nLink original resume files to the corresponding records."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "All resumes auto-parsed, match scores clear at a glance"
            }
          ],
          [
            {
              "text": "Base supports filtering and sorting — hiring managers can view directly"
            }
          ],
          [
            {
              "text": "You can query specific candidates using natural language"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Auto-update Interview Feedback",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After the interview, type your evaluation directly in Workbench:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nCandidate Marco Rossi interview feedback: Strong industry experience, deep understanding of merchandising, fluent English, Italian needs improvement. Result: proceeding to second round. Recommend scheduling a technical interview with the team lead."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The AI auto-updates the feedback and result in the Base."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Auto-reminder for Stale Candidates",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Set up a scheduled reminder: candidates not followed up within 7 days are auto-flagged and pushed to Teams:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nSet up reminder: In the Base, candidates with status \"Pending\" and no update for 7+ days should be auto-flagged in red and pushed to Teams for the recruiter."
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "PS: Under GDPR and EU Anti-Discrimination Directive (2000/78/EC), personal data in resumes is sensitive. Ensure: 1) Only collect information directly relevant to the role; 2) Do not use age, gender, race, religion, or marital status as scoring criteria; 3) Retain candidate data only as long as needed for the hiring purpose (recommend deleting un-hired candidate data within 6 months)."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "HR Scenario Chain",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "These two scenarios aren't isolated. String them together into a complete hiring workflow:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nScenario A (Generate JD) → Publish to channels → Receive resumes\n    ↓\nScenario B (Screen resumes) → Match ranking → Schedule interviews\n    ↓\nInterview feedback written to table → Candidate status updated"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All data flows through the same Base. No tool switching."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After this chapter, you can:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Capability",
            "What you learned"
          ],
          [
            "JD generation",
            "One role input, multilingual multi-channel JD output, written to the table"
          ],
          [
            "Resume screening",
            "Batch upload, AI auto-parses, matches, ranks — natural language queries"
          ],
          [
            "Interview management",
            "Natural language interview feedback, auto-updated to table"
          ],
          [
            "Follow-up reminders",
            "Stale candidates auto-flagged + Teams push"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Next step:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Want to chain multiple scenarios into an automated workflow? → See Chapter 4: \"Build a System\""
            }
          ],
          [
            {
              "text": "Want to build an HR-specific automated Agent? → See Chapter 4: \"Build a System\""
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-2-legal-supplier-contract-review-template-generation-expiry-tracking",
    "title": "Scenario 2 · Legal: Supplier Contract Review, Template Generation & Expiry Tracking",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 17,
    "prev": "scenario-1-hr-jd-generation-resume-screening-candidate-management",
    "next": "scenario-3-finance-invoice-processing-reconciliation-auto-reminders",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Corporate legal work isn't legal research — it's managing contracts. Supplier T&Cs need comparing against company standard terms, NDA and distribution agreements are copied from old documents, and contract expiry dates are scattered across emails and folders. These three tasks take up most of the legal team's time, and each one is a perfect fit for Workbench — no external legal databases needed, just your own documents and data."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Legal Workflow",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Review contract",
            "Supplier sends T&Cs, legal compares line by line against company standards",
            "20-30 page contract, 2-3 hours manual review, easy to miss things"
          ],
          [
            "2. Generate document",
            "Copy from old NDA/distribution agreement, manually modify clauses",
            "Reformatting, version confusion"
          ],
          [
            "3. Track expiry",
            "Expiry dates in Excel or email",
            "Miss renewal windows, auto-renewal clauses get ignored"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, all three steps happen in one platform: the Agent reads contract documents from Library, compares them, generates new contracts from templates, tracks expiry dates in the table, and sends scheduled reminders."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Legal Scenario Stack",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Library",
            "Store company standard contract templates, supplier contract originals",
            "Throughout — all documents read from Library",
            "Control access for sensitive contracts"
          ],
          [
            "Base",
            "Contract info management, expiry tracking, review records",
            "Throughout — all structured data goes into tables",
            "Set up table structure first"
          ],
          [
            "Scheduled Task",
            "Auto-reminder for contract expiry",
            "Scenario C",
            "Set reminder cycle and notification method"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Supplier Contract Review — Compare Against Standards, Report in 10 Minutes",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Supplier sends a 25-page T&C. I need to compare it line by line against our company standard terms. One contract takes 2 hours. Three contracts, and the day is gone.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Prepare standard terms",
              "bold": true
            },
            {
              "text": ": Save your company's standard contract terms to Library (PDF or Word)"
            }
          ],
          [
            {
              "text": "Upload supplier contract",
              "bold": true
            },
            {
              "text": ": Upload the supplier's T&C to the conversation or Library"
            }
          ],
          [
            {
              "text": "Instruct the Agent to compare",
              "bold": true
            },
            {
              "text": ": Tell the Agent which documents are which, ask for a line-by-line comparison"
            }
          ],
          [
            {
              "text": "Review the report",
              "bold": true
            },
            {
              "text": ": The Agent outputs a difference report. Legal reviews and confirms."
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nCompare the following two contracts and output a difference report:\nDocument 1 (Company Standard Terms): Library / Legal/Standard_Terms.pdf\nDocument 2 (Supplier T&C): Uploaded file Supplier_Terms.pdf\n\nComparison dimensions:\n1. Payment terms (terms, currency, penalties)\n2. IP ownership\n3. Confidentiality (scope, duration)\n4. Termination (conditions, notice period)\n5. Liability limitations\n6. Governing law and dispute resolution\n\nFor each dimension:\n- Mark differences (added / removed / modified)\n- Assign risk level (High / Medium / Low)\n- Provide 3 key negotiation suggestions\n\nOutput: Generate a Word difference report, clearly formatted and editable — legal team can annotate and modify directly. Also log this review in the \"Contract Review Records\" Base."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Difference comparison table across 6 dimensions"
            }
          ],
          [
            {
              "text": "Risk level assigned to each difference"
            }
          ],
          [
            {
              "text": "3 key negotiation suggestions"
            }
          ],
          [
            {
              "text": "Difference report as a Word document, editable by legal, plus logged in the contract review table"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 The Agent does document comparison, not legal advice. Risk levels are based on clause differences. Final acceptance is up to the legal team. The Agent saves the line-by-line comparison time — it doesn't replace legal judgment."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Contract Template Generation — NDA & Distribution Agreements in One Click",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Every time we sign an NDA, I copy from the last one, change the company name, date, and clauses, then check the formatting. Distribution agreements are more complex — different clause combinations. One document takes 40 minutes. I do dozens a month.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Prepare templates",
              "bold": true
            },
            {
              "text": ": Save company standard NDA and distribution agreement templates to Library"
            }
          ],
          [
            {
              "text": "Fill in parameters",
              "bold": true
            },
            {
              "text": ": Tell the Agent what type of agreement, counterparty info, and key terms"
            }
          ],
          [
            {
              "text": "Generate document",
              "bold": true
            },
            {
              "text": ": The Agent fills the template and generates the complete document"
            }
          ],
          [
            {
              "text": "Review and archive",
              "bold": true
            },
            {
              "text": ": Legal reviews, saves to Library, and logs in the table"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nGenerate NDA from Library template:\n\nTemplate: Library / Legal/Templates/NDA_Template.docx\nAgreement type: Mutual NDA\nCounterparty info:\n- Company: [Counterparty Name]\n- Registered in: [City, Country]\n- Signatory: [Name, Title]\n\nKey terms:\n- Confidentiality period: 3 years\n- Governing law: Italian law\n- Dispute resolution: Milan arbitration\n- Confidential scope: Technical data, business plans, customer data\n- Exclusions: Already public information, lawfully obtained from third parties\n\nOutput: Word document, preserve template formatting, replace all placeholders\nConstraint: Do not add clauses not in the template, do not modify standard clause wording"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "A complete NDA Word document, ready to send to the counterparty"
            }
          ],
          [
            {
              "text": "All placeholders replaced, template formatting preserved"
            }
          ],
          [
            {
              "text": "A record created in the \"Contract Register\" Base (contract name, counterparty, type, signing date, expiry date)"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 The Agent only fills parameters from the template — it won't write its own clauses. If a clause isn't in the template, the Agent will say \"corresponding clause not found in template.\" Legal only needs to verify the parameters, not write from scratch."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario C: Contract Expiry & Renewal Tracking — Never Miss a Renewal Window",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Last year's supplier agreement auto-renewed because we forgot to send the termination notice 60 days before. This happens 2-3 times a year, and we have to renegotiate every time.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Build the contract register",
              "bold": true
            },
            {
              "text": ": Create a Base recording each contract's key info"
            }
          ],
          [
            {
              "text": "Set expiry reminders",
              "bold": true
            },
            {
              "text": ": Use a scheduled task to scan the register and auto-remind before expiry"
            }
          ],
          [
            {
              "text": "Track renewal status",
              "bold": true
            },
            {
              "text": ": Record renewal progress in the table (notified, negotiating, renewed, terminated)"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Field",
            "Type",
            "Description"
          ],
          [
            "Contract name",
            "Text",
            "Short name"
          ],
          [
            "Counterparty",
            "Text",
            "Signing party name"
          ],
          [
            "Contract type",
            "Single select",
            "NDA / Supplier agreement / Distribution / Lease / Other"
          ],
          [
            "Signing date",
            "Date",
            "Date signed"
          ],
          [
            "Expiry date",
            "Date",
            "Date expires"
          ],
          [
            "Notice period (days)",
            "Number",
            "Days before expiry to send termination notice"
          ],
          [
            "Auto-renewal",
            "Checkbox",
            "Whether it auto-renews"
          ],
          [
            "Contract file",
            "Attachment",
            "Library file link"
          ],
          [
            "Renewal status",
            "Single select",
            "Active / Pending renewal / Negotiating / Terminated"
          ],
          [
            "Notes",
            "Text",
            "Special clause notes"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Scheduled Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nRun every Monday at 9:00 AM:\n- Query the \"Contract Register\" Base\n- Filter: Expiry date within next 60 days AND renewal status = \"Active\"\n- Output: Contracts requiring attention this week\n  - Contract name, Counterparty, Expiry date, Days remaining, Auto-renewal, Notice deadline\n- Write to \"Expiry Reminder\" view in the table\n- Also output summary in conversation"
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 The scheduled task runs every Monday. Legal opens Workbench in the morning and sees which contracts need attention this week. No more digging through Excel or emails."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Supplier contract review: Agent compares T&Cs against company standards line by line, 10-minute difference report"
            }
          ],
          [
            {
              "text": "Contract template generation: Fill parameters from Library templates, NDA and distribution agreements in one click"
            }
          ],
          [
            {
              "text": "Contract expiry tracking: Table-based register, scheduled weekly scan with auto-reminders"
            }
          ],
          [
            {
              "text": "All three scenarios use your own documents and data — no external legal databases needed"
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-3-finance-invoice-processing-reconciliation-auto-reminders",
    "title": "Scenario 3 · Finance: Invoice Processing, Reconciliation & Auto-Reminders",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 18,
    "prev": "scenario-2-legal-supplier-contract-review-template-generation-expiry-tracking",
    "next": "scenario-4-designers-ai-image-generation-fabric-recoloring",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Finance work revolves around \"numbers\" and \"vouchers\" — processing hundreds of invoices a month, reconciling with suppliers, tracking payment progress. Repetitive work with very little room for error. This chapter shows you how to automate the mechanical work: batch invoice recognition with auto-entry, multi-system reconciliation in one click, and auto-reminders for overdue payments."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Finance Workflow",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're in AP or FP&A, the daily finance work follows the same logic:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Invoice processing",
            "Manually extract invoices from email/system, enter one by one",
            "Hundreds of invoices a month, time-consuming and error-prone"
          ],
          [
            "2. Reconciliation",
            "Compare supplier invoices against internal records in Excel",
            "Hours of work at high volume, hard to locate discrepancies"
          ],
          [
            "3. Payment tracking",
            "Manual check of due invoices, manual payment scheduling",
            "Easy to miss due invoices, affecting supplier relationships"
          ],
          [
            "4. Report generation",
            "Manual data aggregation, financial report creation",
            "Scattered data sources, slow aggregation"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, these four steps happen in one platform: AI auto-recognizes invoices, batch-reconciles, monitors due dates, and generates reports. Finance only needs to review and confirm."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Finance Scenario Stack",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Base",
            "Invoice register, reconciliation records, payment calendar",
            "Throughout — all structured data goes into tables",
            "Set up the invoice register structure first"
          ],
          [
            "Library",
            "Invoice file storage, reconciliation report archiving",
            "Invoice originals and reconciliation reports go into Library",
            "Watch access permissions for financial files"
          ],
          [
            "SAP/ERP Integration",
            "Internal accounts payable data",
            "Scenario B — compare supplier invoices against internal records",
            "Confirm system integration with IT"
          ],
          [
            "Auto-Trigger",
            "Expiry reminders, auto-push",
            "Scenario C — auto-reminder for due invoices",
            "No manual intervention after setup"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Batch Invoice Processing — Hundreds of Invoices, Auto-Recognized & Auto-Entered",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Every month, 200-300 invoices come in from supplier emails. Each is a different PDF format. I have to manually extract supplier name, invoice number, amount, date, tax — and enter them into the system. This alone takes two days.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Upload the invoice files",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Upload a batch of invoices (PDF/scans) to the Workbench conversation. Different suppliers, different formats — all mixed together."
            }
          ],
          [
            {
              "text": "AI auto-recognizes and extracts",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI reads each invoice and extracts key fields:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Field",
            "Description"
          ],
          [
            "Supplier name",
            "Billing company name"
          ],
          [
            "Invoice number",
            "Unique ID"
          ],
          [
            "Invoice date",
            "Date of issue"
          ],
          [
            "Due date",
            "Payment deadline"
          ],
          [
            "Net amount",
            "Amount before tax"
          ],
          [
            "Tax amount",
            "VAT / IVA amount"
          ],
          [
            "Gross amount",
            "Total amount"
          ],
          [
            "Currency",
            "EUR / USD / GBP etc."
          ],
          [
            "PO number",
            "Purchase order number (if available)"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "AI auto-validates",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI checks data consistency:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Validation",
            "Description"
          ],
          [
            "Amount calculation",
            "Net + Tax = Gross"
          ],
          [
            "Tax rate check",
            "Does the tax rate match local VAT (e.g. Italy standard 22%)"
          ],
          [
            "Duplicate detection",
            "Same supplier, same amount, similar dates"
          ],
          [
            "PO matching",
            "Does the invoice amount match the PO"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Flag anomalies for human review",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Valid invoices are auto-entered; anomalies (calculation errors, suspected duplicates, PO mismatches) are flagged for you to confirm."
            }
          ],
          [
            {
              "text": "Write to the Base",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "All invoice data is written to the table, organized by supplier, date, and status. Invoice originals are stored in Library and linked to the records."
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nBatch process the following invoice files (PDF), extract key fields:\n- Supplier Name, Invoice Number, Invoice Date, Due Date, Net Amount, Tax Amount, Gross Amount, Currency, PO Number\n\nAutomated validation:\n1. Verify amount calculation (Net + Tax = Gross)\n2. Verify tax rate compliance with Italian VAT standard rate (22%) or reduced rates\n3. Detect duplicate invoices (same supplier, same amount, similar dates)\n4. PO number matching check\n\nOutput Requirements:\n1. Auto-write validated invoices to multi-dimensional table\n2. Flag anomalous invoices separately, list exception reasons\n3. Store invoice originals in Library and link to corresponding records\n4. Generate processing summary: total invoices, passed count, exception count"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "All invoices auto-recognized, extracted, and validated in one pass"
            }
          ],
          [
            {
              "text": "Valid invoices auto-entered, anomalies flagged separately"
            }
          ],
          [
            {
              "text": "Processing summary: total, passed, exceptions"
            }
          ],
          [
            {
              "text": "Invoice originals auto-archived, traceable anytime"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Invoice Data Summary & Visualization",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After entry, use natural language to analyze:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nSummarize this month's total invoice amount by supplier, sort descending, and create a Top 10 supplier pie chart."
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nList all due-but-unpaid invoices, sort by due date ascending, flag overdue days."
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "PS: Under EU e-Invoicing Directive (2014/55/EU) and Italy's SDI (Sistema di Interscambio), electronic invoices must meet specific format standards. AI-extracted data is for assisted entry. Final financial confirmation and payment approval must be done by authorized personnel. For cross-border invoices, note different VAT rates (e.g. Germany 19%, France 20%, Italy 22%)."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "The core value of finance is data accuracy and compliance, not manual invoice entry. Let the Agent handle invoice recognition and data aggregation. Finance professionals spend their time on what needs real judgment: reconciliation exceptions and budget analysis."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Recommended combination:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Scenario",
            "Recommended Skill",
            "Description"
          ],
          [
            "Invoice processing",
            "Invoice Recognition Skill",
            "Auto-extract invoice key fields, supports multiple formats"
          ],
          [
            "Data summary",
            "Data Analysis Skill",
            "Auto-summarize and analyze cleaned data"
          ],
          [
            "Reconciliation reminder",
            "Scheduled Task",
            "Periodic account-age check, auto-remind when overdue"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Next step:",
            "bold": true
          },
          {
            "text": " Start with invoice recognition. Get invoices into the Base, then have the Agent periodically summarize and generate reconciliation reports. Remember: AI-extracted data needs human review. Final approval is by authorized personnel."
          }
        ]
      }
    ]
  },
  {
    "id": "scenario-4-designers-ai-image-generation-fabric-recoloring",
    "title": "Scenario 4 · Designers: AI Image Generation & Fabric Recoloring",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 19,
    "prev": "scenario-3-finance-invoice-processing-reconciliation-auto-reminders",
    "next": "scenario-5-e-commerce-operations-multi-channel-product-copy-data-insights",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A designer's work is about \"seeing\" and \"drawing\" — finding inspiration, sketching, color-matching, building lookbooks. Every task takes time and aesthetic judgment. This chapter shows you how to hand the repetitive visual work to the Agent: turn model photos into flat lays, recolor flat sketches, and let designers spend their time on creative decisions."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Designer Workflow",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're a fashion designer or a visual designer, the daily flow is the same:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Inspiration gathering",
            "Browse Pinterest, Instagram — manually screenshot",
            "High volume, hard to categorize, not directly reusable"
          ],
          [
            "2. Sketching",
            "Hand-drawn or CTD software, one by one",
            "Every colorway needs a separate drawing"
          ],
          [
            "3. Color confirmation",
            "Sample → photo → compare → approve",
            "2-3 week cycle, back-and-forth communication"
          ],
          [
            "4. Flat lays / Lookbooks",
            "Studio shoot or 3D render",
            "Tight schedule, high cost, too many SKUs"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, steps 2-4 can be handled by the "
          },
          {
            "text": "image-generator"
          },
          {
            "text": " Skill. Output goes directly to Library, linked to the Base."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Designer Scenario Stack",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool",
            "Use",
            "Where to find"
          ],
          [
            "image-generator Skill",
            "8 generation/editing capabilities for fashion e-commerce design teams: upscale, model-to-lifestyle, garment-to-flat-sketch, flat-lay-to-3D-wear, fabric recolor, half-body completion, and reference-style generation",
            "Explore → search image-generator"
          ],
          [
            "Library",
            "Store and manage design assets, output",
            "Sidebar → Library"
          ],
          [
            "Base",
            "Manage designs, link to SKUs, track approvals",
            "Sidebar → Base"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Model Photo to Flat Lay — One Image, Direct Output",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Hundreds of SKUs each season need flat lay photos. The photography schedule is tight, and outdoor shoots are expensive. Studio model photos already exist, but lookbooks and e-commerce product pages need flat lays. Reshooting? Not enough time or budget."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Makes This Different",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Generic AI image tools (Midjourney / DALL-E) don't lock garment attributes — the result \"looks like but isn't the same garment.\" Workbench's image-generator, in edit mode, locks the original garment's attributes: no new design, same garment, flat presentation."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Find a studio model photo or product shot in Library"
            }
          ],
          [
            {
              "text": "In the conversation, invoke image-generator and select \"Model to Flat Lay\" mode"
            }
          ],
          [
            {
              "text": "The Agent receives the original image, locks garment attributes (style, fabric, details), and generates the flat lay"
            }
          ],
          [
            {
              "text": "The output PNG is saved directly to Library with tags (category/season/SKU)"
            }
          ],
          [
            {
              "text": "Link the image to the corresponding record in the Base"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Convert this model photo from Library into a flat lay image. Output in PNG format. Save to Library folder \"2026SS\", tag with: category=outerwear, season=2026SS."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "A flat lay image with the original garment's attributes locked (PNG format)"
            }
          ],
          [
            {
              "text": "Saved to the specified Library folder with tags"
            }
          ],
          [
            {
              "text": "Linkable to the corresponding SKU record in the table"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Garment to Flat Sketch Mode",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The same photo can also use \"Garment to Flat Sketch\" mode, generating a technical sketch suitable for Tech Packs. The sketch can then be used for recoloring."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Fabric Recolor — Input PLM Color Code, Change the Sketch",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One style comes in 5-8 colorways. Each colorway needs sampling, photography, retouching — a 2-3 week cycle. Clients and managers review color cards back and forth without seeing the actual garment. By the time colors are confirmed, the market window has almost closed."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "How This Is Different from Scenario A",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Scenario A changes the "
          },
          {
            "text": "presentation format",
            "italic": true
          },
          {
            "text": " (model photo → flat lay). Scenario B changes the "
          },
          {
            "text": "color",
            "italic": true
          },
          {
            "text": " (same garment, different colorways). Both lock garment attributes, but Scenario B only replaces the fabric color, with special handling for denim."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Find a colored flat sketch (Tech Pack flat sketch) in Library or the table"
            }
          ],
          [
            {
              "text": "Get the target color code from the PLM system or table"
            }
          ],
          [
            {
              "text": "In the conversation, invoke image-generator, select \"Fabric Recolor\" mode, input the original image + color reference"
            }
          ],
          [
            {
              "text": "The Agent locks the garment style, replaces only the fabric color, and applies special denim rules automatically"
            }
          ],
          [
            {
              "text": "The recolored image is saved to Library and linked to the SKU's table record"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Recolor the flat sketch of this jacket from Library using PLM color code CL-0274. Save the output to Library and link it to the record SKU-2026-FW031 in the Base."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "A recolored flat sketch — garment style unchanged, color replaced by PLM code"
            }
          ],
          [
            {
              "text": "Denim fabric with special handling rules applied automatically"
            }
          ],
          [
            {
              "text": "Saved to Library, linked to the SKU record"
            }
          ],
          [
            {
              "text": "Ready for internal approval and client confirmation — shorter pre-sampling communication cycle"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Else image-generator Can Do",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Beyond these two scenarios, image-generator supports:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Capability",
            "Description"
          ],
          [
            "Text to Generation",
            "Generate a new garment image from text description"
          ],
          [
            "Upscale",
            "Enlarge low-res images to high resolution"
          ],
          [
            "Model to Lifestyle",
            "Turn studio model photos into lifestyle scene images"
          ],
          [
            "Half-Body Completion",
            "Complete a half-body model photo into a full-body lookbook image"
          ],
          [
            "Reference-Style Generation",
            "Upload a reference image, the Agent auto-analyzes the style and generates similar effects"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Limits:",
            "bold": true
          },
          {
            "text": " Fashion/garment domain only. Edit modes lock original attributes. Half-body completion uses a preset model library. No multi-capability chaining. No batch processing."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "A designer's core value is aesthetic judgment and creative decisions, not repeatedly drawing colorways or shooting flat lays. Hand the repetitive visual work to image-generator. Designers spend their time on the part that needs a human."
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-5-e-commerce-operations-multi-channel-product-copy-data-insights",
    "title": "Scenario 5 · E-commerce Operations: Multi-Channel Product Copy & Data Insights",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 20,
    "prev": "scenario-4-designers-ai-image-generation-fabric-recoloring",
    "next": "scenario-6-marketing-competitor-social-media-monitoring-campaign-posters-ai-video-production",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "E-commerce operations revolve around \"listing\" and \"numbers\" — each channel has different copy formats, each platform has different rules, and every week there's data to review and reports to produce. This chapter shows you how to upgrade copy adaptation and data analysis from \"manual mode\" to \"semi-auto mode.\""
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The E-commerce Operations Workflow",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Product copy",
            "Manual rewrite per channel, manual translation",
            "Format adaptation takes time, multilingual quality is inconsistent"
          ],
          [
            "2. Data analysis",
            "Export from each platform, pivot tables in Excel",
            "Data scattered across platforms, weekly repetitive work"
          ],
          [
            "3. Product listing",
            "Manual attribute entry, image upload, description editing",
            "Low efficiency at high SKU volume"
          ],
          [
            "4. Weekly/monthly reports",
            "Manual data pull, table creation, analysis writing",
            "Highly repetitive, easy to miss key metrics"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, steps 1-2 can be handled by the Agent — multi-channel, multi-language copy generated simultaneously, data analyzed directly from the table."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: E-commerce Operations Stack",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool",
            "Use",
            "Where to find"
          ],
          [
            "Product Knowledge Base Skill",
            "Pull product info from Library/PLM",
            "Explore → search Product Knowledge Base"
          ],
          [
            "Base",
            "Store product data, copy management, data analysis",
            "Sidebar → Base"
          ],
          [
            "Library",
            "Manage product images, assets",
            "Sidebar → Library"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Multi-Channel Product Copy — One Product, Three Channels, Three Languages",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Same product: the website needs brand tone, Amazon needs SEO keywords, Zalando needs concise specs. Each channel also needs Italian, English, and German versions. One SKU = 9 pieces of copy. 100 SKUs = 900 pieces. Writing by hand? Impossible."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Pull product info from the product knowledge base / Library / table (fabric, fit, color, design features)"
            }
          ],
          [
            {
              "text": "In the conversation, specify channel rules and language requirements"
            }
          ],
          [
            {
              "text": "The Agent generates copy per channel rules (website = brand tone, Amazon = SEO keywords, Zalando = concise specs)"
            }
          ],
          [
            {
              "text": "Three languages (Italian/English/German) generated simultaneously"
            }
          ],
          [
            {
              "text": "Output written to the table, organized by channel + language"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Pull product info from the product knowledge base. Generate copy for three channels: Official Website (brand tone), Amazon (SEO keywords), Zalando (concise specs). Generate in Italian, English, and German simultaneously. Write results to the Base."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Each product × 3 channels × 3 languages = 9 pieces of copy, generated in one pass"
            }
          ],
          [
            {
              "text": "Written to the table, organized by channel and language"
            }
          ],
          [
            {
              "text": "Copy based on real product knowledge base info — no fabrication"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Auto-Generate from PLM Metadata",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If PLM data is connected to the table, the Agent can generate product descriptions directly from PLM metadata (including design element inputs) — no manual product info preparation needed."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Data Analysis & Insights — Query the Table Directly",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Every week, download data from each platform, merge, create pivot tables, draw charts, write analysis. Data lives in Amazon Seller Central, Zalando Partner Portal, the website backend, and more. Manual merging is time-consuming and error-prone."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Make sure all channel sales data is in the Base"
            }
          ],
          [
            {
              "text": "Ask questions directly in the conversation — the Agent queries the table and analyzes"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Query the Base for last week's sales data across all channels. Summarize units sold and revenue by channel. Identify channels with week-over-week decline greater than 10%. Output a brief analysis report."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "The Agent queries the table directly and returns structured analysis"
            }
          ],
          [
            {
              "text": "Includes channel-wise sales and revenue summary"
            }
          ],
          [
            {
              "text": "Channels with >10% week-over-week decline flagged"
            }
          ],
          [
            {
              "text": "Ready to use as a weekly report data source"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "The core value of e-commerce operations is product selection strategy and operational rhythm, not manual copy editing and data pulling. Hand copy adaptation and data analysis to the Agent. Operations people spend their time on the part that needs judgment."
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-6-marketing-competitor-social-media-monitoring-campaign-posters-ai-video-production",
    "title": "Scenario 6 · Marketing: Competitor Social Media Monitoring, Campaign Posters & AI Video Production",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 21,
    "prev": "scenario-5-e-commerce-operations-multi-channel-product-copy-data-insights",
    "next": "scenario-7-sales-lead-automation-multi-source-prospecting",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Marketing runs on \"content\" and \"monitoring\" — tracking competitors, creating campaign posters, producing social media videos. Every task is time-consuming and repetitive. This chapter shows you how to automate competitor social media monitoring, generate multi-size campaign posters in one click, and produce videos from assets to final cut — all automatically. Marketing spends its time on strategy and creativity."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Marketing Workflow",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're a brand manager, digital marketing specialist, or content creator, the daily flow is the same:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Competitor monitoring",
            "Manually browse Instagram, Facebook, screenshot data",
            "Half a day to produce one competitor report"
          ],
          [
            "2. Campaign posters",
            "Designer creates each size individually, multiple revisions",
            "Long turnaround, 5 sizes = 5 layout adjustments"
          ],
          [
            "3. Social media video",
            "Hire a supplier, shoot, edit, adapt for multiple platforms",
            "2-week delivery, high cost"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, these three steps happen in one platform: AI auto-monitors competitor social media, pulls assets from Library to generate multi-size posters and videos in one go. Marketing only reviews and makes the final call."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Marketing Scenario Stack",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Base",
            "Competitor data register, asset management",
            "Throughout — all structured data into tables",
            "Set up the competitor register structure first"
          ],
          [
            "Library",
            "Brand assets, campaign assets, generated output storage",
            "All assets from Library, output saved to Library",
            "Organize by campaign/platform/date"
          ],
          [
            "Apify API",
            "Connect to external web data sources via Apify, provides generic scraper wrapper for Instagram, Pinterest, any website, Google Shopping, etc.",
            "Scenario A: competitor monitoring",
            "Public info only; Instagram/Facebook stability affected by anti-scraping measures"
          ],
          [
            "image-generator",
            "8 editing/generation capabilities for fashion e-commerce",
            "Scenario B",
            "Start from existing Library assets"
          ],
          [
            "video-generation",
            "Supports text-to-video, first-frame-to-video, multi-reference-to-video — produces 15-second marketing clips in minutes (720P/1080P, multiple aspect ratios)",
            "Scenario C",
            "Start from existing Library assets"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Competitor Social Media Monitoring — AI Watches While You Work",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Every time I do competitor analysis, I manually browse Instagram and Facebook, screenshot data. Half a day for one report.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Set monitoring targets",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Tell the AI which competitors and dimensions to monitor:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "Description",
            "Example"
          ],
          [
            "Competitor brands",
            "Brands to watch",
            "Ralph Lauren, Diesel, Guess"
          ],
          [
            "Channels",
            "Social platforms",
            "Instagram, Facebook"
          ],
          [
            "Frequency",
            "How often to run",
            "Every Monday 9:00 AM auto-execute"
          ],
          [
            "Focus dimensions",
            "What to look at",
            "Product launches, promotions, KOL collabs, UGC"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "AI auto-captures via Apify",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI calls the Apify API and captures the week's social posts from each competitor."
            }
          ],
          [
            {
              "text": "AI auto-classifies and extracts data",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI categorizes the captured content:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Category",
            "Description"
          ],
          [
            "Product showcase",
            "New launches, product close-ups"
          ],
          [
            "Promotions",
            "Discounts, limited-time offers"
          ],
          [
            "KOL collaboration",
            "Influencer posts, co-branded content"
          ],
          [
            "UGC",
            "User-generated content"
          ],
          [
            "Brand story",
            "Brand philosophy, behind-the-scenes"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Generate competitor social media weekly report",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI aggregates each brand's weekly activity and produces a comparison report:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Report content",
            "Description"
          ],
          [
            "Posting frequency comparison",
            "How many posts each brand put up this week"
          ],
          [
            "Engagement ranking",
            "Top 5 highest-engagement posts"
          ],
          [
            "Content strategy differences",
            "Which brand is product-focused, which is brand-story-focused"
          ],
          [
            "Weekly trends",
            "Notable industry movements"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Write to table + push to email",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "All data goes into the table. The report is pushed to your email."
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nSet up competitor social media monitoring:\n- Brands: Ralph Lauren, Diesel, Guess\n- Channels: Instagram, Facebook\n- Frequency: Every Monday 9:00 AM, auto-execute\n- Focus dimensions: New product launches, promotional activities, KOL collaborations, user-generated content (UGC)\n\nBased on this week's captured data, generate a competitor social media weekly report:\n1. Posting frequency comparison across brands\n2. Top 5 posts by engagement (likes + comments + shares)\n3. Content strategy differentiation analysis (which brand is product-focused vs. brand-story-focused)\n4. Notable trends this week\n\nWrite to multi-dimensional table and push to email."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Competitor social media weekly report arrives every Monday morning — no manual browsing"
            }
          ],
          [
            {
              "text": "Competitor data accumulates in the table, supporting long-term trend comparison"
            }
          ],
          [
            {
              "text": "AI auto-classifies and extracts engagement data — no manual sorting"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "PS: Apify scrapes Instagram and Facebook public posts, but stability is affected by platform anti-scraping measures. Stick to public posts. Under EU Database Directive (96/9/EC), systematic scraping and reuse of public information should not infringe database rights. Use competitor data internally for decision-making; don't publish raw scraped content externally."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Campaign Poster Generation — Pull Assets from Library, Generate 5 Sizes in One Click",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Every campaign poster has to wait for the designer's schedule. One campaign needs Instagram, Facebook, email, and print — 5 different sizes. The designer manually adjusts the layout 5 times.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Makes This Different",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This isn't generating a poster from scratch. It starts from existing brand assets in Library (product images, campaign assets, model photos). AI generates posters based on the brand template and outputs multiple sizes in one batch — no manual size-by-size layout adjustment."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Pull assets from Library",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "In the conversation, specify which assets in Library to use (product images, campaign assets, model photos)."
            }
          ],
          [
            {
              "text": "Input poster requirements",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Tell the AI the campaign theme, brand template, and key info:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "Description",
            "Example"
          ],
          [
            "Campaign theme",
            "What event",
            "Summer Sale 2026"
          ],
          [
            "Brand template",
            "Visual style",
            "Minimalist white background + Logo top-left"
          ],
          [
            "Key info",
            "Must-show content",
            "8/15-8/31 Storewide 30% Off"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "AI generates poster versions",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI generates 3-4 poster versions for you to choose from."
            }
          ],
          [
            {
              "text": "Select version, output all sizes in one batch",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "After selection, the AI auto-adapts to all required sizes:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Size",
            "Use",
            "Resolution"
          ],
          [
            "Instagram Square 1:1",
            "Instagram posts",
            "1080×1080"
          ],
          [
            "Instagram Story 9:16",
            "Instagram Stories",
            "1080×1920"
          ],
          [
            "Facebook Landscape 1.91:1",
            "Facebook ads",
            "1200×628"
          ],
          [
            "Email Banner 3:1",
            "EDM",
            "1800×600"
          ],
          [
            "Print A4 Portrait",
            "Offline materials",
            "2480×3508"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Save to Library + write to table",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "All versions go to Library, organized by campaign/date/channel."
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nPull this product image and this Campaign asset from Library to generate an event poster:\n- Event Theme: Summer Sale 2026\n- Brand Template: Minimalist white background + Logo top-left\n- Key Info: 8/15-8/31 Storewide 30% Off\n\nFirst generate 3-4 poster versions for selection.\n\nAfter selection, generate all the following size versions in one batch:\n1. Instagram 1:1 (1080×1080)\n2. Instagram Story 9:16 (1080×1920)\n3. Facebook 1.91:1 (1200×628)\n4. Email Banner 3:1 (1800×600)\n5. Print A4 (2480×3508)\n\nAuto-adapt layout for each size. Store all versions in Library and write to multi-dimensional table."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Uses existing Library assets — no design from scratch"
            }
          ],
          [
            {
              "text": "AI generates 3-4 versions for selection, then outputs 5 sizes in one batch"
            }
          ],
          [
            {
              "text": "Designer only needs final fine-tuning — no manual size-by-size layout"
            }
          ],
          [
            {
              "text": "All versions auto-saved to Library for team collaboration"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "PS: If AI-generated human imagery is used in posters, label it \"AI-generated imagery\" to comply with EU AI Act transparency requirements. Ensure brand asset copyrights are properly licensed."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario C: AI Video Generation — From Library Assets to Social Media Short Clips (Advanced)",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Creating a social media product video means hiring a supplier, shooting, editing, and adapting for multiple platforms. 2-week delivery, high cost.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Makes This Different",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This doesn't start from scratch finding assets. It uses existing model photos or campaign assets from Library. The AI designs prompts based on the social media context and generates platform-appropriate short videos."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Pull assets from Library",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Select existing assets: model try-on photos, campaign shots, product white-background images."
            }
          ],
          [
            {
              "text": "Choose the social media context and style",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Tell the AI the platform and style:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "Description",
            "Example"
          ],
          [
            "Platform",
            "Where it goes",
            "Instagram Reels / TikTok / YouTube Shorts"
          ],
          [
            "Duration",
            "How long",
            "8-10 seconds"
          ],
          [
            "Style keywords",
            "What vibe",
            "Dynamic / Minimal / Story-driven / Street style"
          ],
          [
            "Copy points",
            "Must-include message",
            "Summer Sale 2026 Storewide 30% Off"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "AI auto-designs prompts and generates video",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI designs prompts (rhythm, transitions, subtitles, music style) and generates a 10-second product video."
            }
          ],
          [
            {
              "text": "Select version, auto-adapt to multi-platform sizes",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "After selection, the AI auto-adapts to each platform:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Platform",
            "Ratio",
            "Description"
          ],
          [
            "Instagram Reels",
            "9:16",
            "Vertical full-screen"
          ],
          [
            "TikTok",
            "9:16",
            "Vertical full-screen"
          ],
          [
            "YouTube Shorts",
            "9:16",
            "Vertical full-screen"
          ],
          [
            "Facebook",
            "1:1",
            "Square"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Save to Library + write to table",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "All videos go to Library, organized by campaign/date/channel/platform. Shareable with the sales team for one-click distribution."
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nPull this set of model try-on images and Campaign assets from Library to create a social media short video:\n- Platform: Instagram Reels\n- Duration: 10 seconds\n- Style: Dynamic street style, fast pace, with transition effects\n- Subtitle: Summer Sale 2026 Storewide 30% Off\n- Outro: Brand Logo\n\nAfter selecting the version, auto-adapt to the following social media sizes:\n1. Instagram Reels 9:16\n2. TikTok 9:16\n3. YouTube Shorts 9:16\n4. Facebook 1:1\n\nStore all in Library and write to multi-dimensional table, categorized under Campaign 2026 Summer Sale."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Uses existing Library assets — no reshoot needed"
            }
          ],
          [
            {
              "text": "AI auto-designs prompts, generates video, adapts to multi-platform sizes"
            }
          ],
          [
            {
              "text": "What used to take 2 weeks for delivery now takes minutes for a first draft"
            }
          ],
          [
            {
              "text": "Shareable with the sales team for direct distribution"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "PS: Video generation quality depends on the quality and resolution of Library assets. Use high-resolution product images and campaign assets. Under EU AI Act, AI-generated video using deepfake technology must be labeled as AI-generated content."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After this chapter, you can:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Capability",
            "What you learned"
          ],
          [
            "Competitor social media monitoring",
            "Set competitors and dimensions, AI auto-captures, classifies, and generates weekly reports"
          ],
          [
            "Campaign poster generation",
            "Pull assets from Library, generate multi-size posters in one click"
          ],
          [
            "AI video production",
            "From Library assets, AI generates social media short videos and adapts to multi-platform sizes"
          ],
          [
            "Compliance awareness",
            "EU AI Act transparency requirements, Database Directive"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Next step:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Want to cross-analyze competitor data with sales data? → See the Sales chapter"
            }
          ],
          [
            {
              "text": "Want to build a marketing-specific automated Agent? → See Chapter 4: \"Build a System\""
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-7-sales-lead-automation-multi-source-prospecting",
    "title": "Scenario 7 · Sales: Lead Automation & Multi-Source Prospecting",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 22,
    "prev": "scenario-6-marketing-competitor-social-media-monitoring-campaign-posters-ai-video-production",
    "next": "scenario-8-merchandise-planning-product-operations-analysis-inventory-risk-alerts",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sales runs on \"clients\" and \"leads\" — collecting business cards at trade shows, following up, developing new retail accounts. Every task needs quick response and data support. This chapter shows you how to turn business card photos into leads instantly, auto-research customer backgrounds, intelligently score and rank, and proactively prospect from multiple data sources — so sales teams spend their time closing deals."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Sales Workflow",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're a sales manager, account manager, or business developer, the daily flow is the same:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Trade show lead capture",
            "Collect business cards, organize them at home",
            "Leads go cold by the time you get home, no context for follow-up"
          ],
          [
            "2. Customer research",
            "Manually check Google, LinkedIn, Instagram",
            "4-5 platforms per customer, time-consuming"
          ],
          [
            "3. Find new retail accounts",
            "Walk the streets, rely on network, guess",
            "No data on which neighborhoods have target stores"
          ],
          [
            "4. Follow-up management",
            "Excel tracking, easy to forget",
            "Leads go cold after a week without contact"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, these four steps happen in one platform: snap a business card photo → instant structured lead, AI auto-researches customer background from multiple sources, Apify proactively searches for target stores, follow-up status is auto-monitored."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Sales Scenario Stack",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Base",
            "Customer lead register, store profiles, follow-up dashboard",
            "Throughout — all structured data into tables",
            "Set up the lead register structure first"
          ],
          [
            "Apify API",
            "Connect to external web data sources via Apify, provides generic scraper wrapper for Google Maps, LinkedIn, Instagram, any website, etc.",
            "Scenario A: customer research + Scenario B: store search",
            "Public info only"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Customer Profile & Lead Automation — From Business Card Photo to Follow-up Suggestions",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Collect a stack of business cards at the trade show. By the time I organize them at home, leads are cold. Customer background research is manual. No context for follow-up.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Makes This Valuable",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Snap a business card photo at the trade show → upload → AI parses and writes to the table → auto-researches customer background (Google Maps / LinkedIn / Instagram / website) → AI gives partnership recommendations. From lead capture to follow-up, all in one step. Leads don't go cold."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Snap and upload the business card",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "At the trade show, snap a photo and upload it to the Workbench conversation."
            }
          ],
          [
            {
              "text": "AI auto-OCR + write to table",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI auto-recognizes the card info:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Field",
            "Description"
          ],
          [
            "Company",
            "Company name on the card"
          ],
          [
            "Contact",
            "Name"
          ],
          [
            "Title",
            "Job title"
          ],
          [
            "Phone",
            "Contact number"
          ],
          [
            "Email",
            "Email address"
          ],
          [
            "Address",
            "Company address"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "AI auto-researches customer background",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI automatically researches from multiple channels and creates a complete profile:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Channel",
            "Research content"
          ],
          [
            "Google Maps",
            "Location, business status, rating, review count"
          ],
          [
            "LinkedIn",
            "Company size, industry, recent updates, key decision-makers"
          ],
          [
            "Instagram",
            "Follower count, partner brands, content style, recent activity"
          ],
          [
            "Website",
            "Main business, target customer segment, price range"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "AI gives partnership recommendations",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "You input your follow-up rules. The AI gives recommendations based on the customer profile:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Recommendation dimension",
            "Description"
          ],
          [
            "Match score",
            "High / Medium / Low"
          ],
          [
            "Partnership approach",
            "Wholesale / Retail / E-commerce"
          ],
          [
            "First-contact talking points",
            "Based on the customer's recent activity"
          ],
          [
            "Recommended products",
            "Based on the customer's segment and price range"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Set follow-up reminders",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Leads not followed up within 7 days are auto-flagged and pushed to Teams."
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nRecognize this business card's information (Company / Contact Person / Title / Phone / Email / Address), write to multi-dimensional table customer lead tracker, set next follow-up date to 3 days later.\n\nThen research this customer's background information:\n1. Google Maps: company location, business status, rating and reviews\n2. LinkedIn: company size, industry, recent updates\n3. Instagram: follower count, partner brands, content style\n4. Official website: main business, target customer segment, price range\n\nSummarize and write to multi-dimensional table customer profile.\n\nBased on the customer profile and my follow-up rules (target customer = chain store + monthly sales 500+ + has Instagram operations), provide partnership advancement recommendations:\n1. Match score\n2. Recommended partnership approach (wholesale / retail / e-commerce)\n3. Suggested first-contact talking points (based on customer's recent activities)\n4. Recommended products (based on customer's segment and price range)\n\nSet reminder: leads not followed up within 7 days auto-flagged in red and pushed to Teams."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Business card photo → structured lead in seconds"
            }
          ],
          [
            {
              "text": "AI auto-researches 4 channels, generates a complete customer profile"
            }
          ],
          [
            {
              "text": "AI gives partnership recommendations based on your rules"
            }
          ],
          [
            {
              "text": "Follow-up status auto-monitored — leads don't go cold"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Batch Process All Trade Show Business Cards",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Collected 50 business cards at the trade show? Snap all photos, upload in batch. The AI processes: recognize → research → score → rank by match. You start following up with high-match leads by the time you get to the hotel."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "PS: Personal information on business cards is \"personal data\" under GDPR. Ensure: 1) You obtained consent when collecting the card for business contact purposes; 2) Card data is used only for B2B business follow-up; 3) Delete unconverted lead data after a reasonable retention period (recommend 12 months)."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Sales Lead Prospecting — Multi-Source Data to Find Stores (Advanced)",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Finding new retail accounts means walking the streets or relying on your network. No data on which neighborhoods have target stores. Customer screening lacks data support.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "How This Is Different from Scenario A",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Comparison",
            "Sub-scenario A: Trade Show Lead Automation",
            "Sub-scenario B: Multi-Source Prospecting"
          ],
          [
            "Customer source",
            "Business cards from trade shows",
            "You proactively search"
          ],
          [
            "Search method",
            "Existing contacts",
            "Search by area + conditions"
          ],
          [
            "Data sources",
            "OCR + 4-channel research",
            "Google Maps + Instagram + online content"
          ],
          [
            "Best for",
            "Immediate follow-up after trade shows/events",
            "Expanding into new markets, developing new clients"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Set the target store profile + search area",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Tell the AI what kind of store you're looking for and where:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "Description",
            "Example"
          ],
          [
            "City/neighborhood",
            "Where to search",
            "London Shoreditch"
          ],
          [
            "Store type",
            "What kind",
            "Independent fashion boutique"
          ],
          [
            "Price range",
            "What tier",
            "Mid-to-high end"
          ],
          [
            "Target customer",
            "Who they serve",
            "25-35 age group"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "AI searches Google Maps via Apify",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI searches by area + type, returns: store name, address, rating, review count, business status, category."
            }
          ],
          [
            {
              "text": "AI multi-source deep research",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "For each candidate store, multi-dimensional research:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Channel",
            "Research content"
          ],
          [
            "Google Maps",
            "Location, street view, rating, review content (analyze customer profile)"
          ],
          [
            "Nearby demographic profile",
            "Population density, spending level, age distribution"
          ],
          [
            "LinkedIn",
            "Company size, founding year, operating history (chain vs. single store)"
          ],
          [
            "Instagram",
            "Follower count, partner brands, content style (brand alignment)"
          ],
          [
            "Online published content",
            "Multi-source search for the store's content (selection style, existing suppliers)"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "AI match score + partnership recommendations",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Based on your partnership rules, the AI evaluates each store:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Recommendation dimension",
            "Description"
          ],
          [
            "Match score",
            "0-100, weighted across dimensions"
          ],
          [
            "Partnership approach",
            "Wholesale / Consignment / Co-brand / Pop-up"
          ],
          [
            "Strengths",
            "Why this store is a good fit for us"
          ],
          [
            "Risk alerts",
            "Existing competitor partnership? Mismatched customer base? Unstable operations?"
          ],
          [
            "First-contact pitch",
            "Based on the store's recent activity and selection style"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Sort by match score, write to table",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "The AI sorts by match score descending. You start with the Top 5."
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nUse Apify to call Google Maps API, search for independent fashion boutiques within 2km radius of London Shoreditch district. Return: store name, address, rating, review count, business status, category. Write to multi-dimensional table as candidate store list.\n\nConduct multi-source data research on each candidate store:\n1. Google Maps: location, street view, rating, review content, analyze in-store customer profile\n2. Nearby area demographic profile (population density, consumption level, age distribution)\n3. LinkedIn: company size, founding year, operating history (chain vs. single store)\n4. Instagram: follower count, partner brands, content style\n5. Multi-source search for store's online published content, understand selection style and existing suppliers\n\nSummarize and write to multi-dimensional table store profile.\n\nBased on the store profile and my partnership rules (target = independent boutique + mid-to-high end + Instagram followers 5000+ + no direct competitor partnership), provide for each candidate store:\n1. Match score (0-100 points)\n2. Partnership approach (wholesale / consignment / co-brand / pop-up)\n3. Strengths analysis\n4. Risk alerts\n5. Suggested first-contact pitch\n\nSort by match score from highest to lowest."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Auto-search for target stores by area — no more walking the streets"
            }
          ],
          [
            {
              "text": "Each store has a complete profile (5-channel data aggregated)"
            }
          ],
          [
            {
              "text": "AI scores and sorts by your rules — start with Top 5"
            }
          ],
          [
            {
              "text": "Includes risk alerts and partnership approach suggestions — first contact has context"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: Batch Search Multiple Neighborhoods",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nBatch search for independent fashion boutiques in London neighborhoods: Shoreditch, Notting Hill, Covent Garden. Aggregate rankings, output a city-level partnership opportunity list."
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "PS: Under GDPR, collecting B2B contact information from public sources (Google Maps/Instagram) falls under \"Legitimate Interest\" processing. When first contacting a store, inform them of the data source and provide an opt-out option (Right to Object). Do not use the collected personal information for non-B2B purposes."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After this chapter, you can:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Capability",
            "What you learned"
          ],
          [
            "Trade show lead capture",
            "Business card photo → structured lead, AI auto-researches background + gives partnership recommendations"
          ],
          [
            "Proactive prospecting",
            "Multi-source data search for target stores, AI scores and sorts"
          ],
          [
            "Customer profile",
            "4-5 channels auto-researched, complete customer/store profile"
          ],
          [
            "Follow-up management",
            "Stale leads auto-flagged + Teams reminder"
          ],
          [
            "Compliance awareness",
            "GDPR personal data protection, B2B contact compliance"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Next step:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Want to fully automate the customer development process? → See Chapter 4: \"Build a System\""
            }
          ],
          [
            {
              "text": "Want to build a sales-specific Agent? → See Chapter 4: \"Build a System\""
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "scenario-8-merchandise-planning-product-operations-analysis-inventory-risk-alerts",
    "title": "Scenario 8 · Merchandise Planning: Product Operations Analysis & Inventory Risk Alerts",
    "chapterId": "chapter-3-role-specific-scenarios",
    "chapterTitle": "Chapter 3 · Role-Specific Scenarios",
    "index": 23,
    "prev": "scenario-7-sales-lead-automation-multi-source-prospecting",
    "next": "4-1-project-a-permanent-home-for-ongoing-work",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One of the core responsibilities for merchandise planning and operations teams is the weekly product analysis — what's selling, what's profitable, what's at risk, what to push and what to clear. The process itself isn't complicated, but it's the same routine every week: open the sales table, inventory table, match SKUs, calculate sell-through and margin, find best-sellers and slow-movers, compile a report. After hours of work, only a few questions really need your judgment."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, you can have the Agent run the entire analysis pipeline — from data checking, metric calculation, product stratification, anomaly detection, root cause analysis to action recommendations. You make the business decisions."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Merchandise Planning Workflow",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Whether you're a merchandise planning manager or an operations specialist, the product analysis chain looks the same:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Traditional approach",
            "Pain point"
          ],
          [
            "1. Data preparation",
            "Export sales, inventory, and product master data from ERP — manually format",
            "SKU codes don't match across tables; data is missing, duplicated, or messy"
          ],
          [
            "2. Metric calculation",
            "Calculate sales, margin, sell-through, inventory turnover in Excel",
            "Same formulas and pivot tables every week — redo everything for new data"
          ],
          [
            "3. Product stratification",
            "Break down by category, price tier — find core and low-performing products",
            "Many dimensions, cross-analysis is time-consuming, easy to focus on sales while ignoring inventory"
          ],
          [
            "4. Anomaly detection",
            "Manually filter slow-movers, high-inventory, margin-anomaly SKUs",
            "Fixed threshold catches everything — different categories have different norms, lots of false positives"
          ],
          [
            "5. Root cause analysis",
            "Guess based on experience: \"demand dropped,\" \"seasonal factors\"",
            "No data evidence, conclusions not traceable"
          ],
          [
            "6. Action planning",
            "Write a report, list recommendations, review in meeting",
            "Report is outdated by the time the next week rolls around"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Workbench, these six steps happen in one conversation: the Agent reads the table data, auto-calculates metrics, breaks down structure, identifies anomalies, analyzes causes, and outputs a report with data-backed evidence and action recommendations."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pick the Right Tools: Merchandise Planning Stack",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Tool / Skill",
            "Best for",
            "How we use it",
            "Note"
          ],
          [
            "Base",
            "Sales detail, inventory detail, product master data, analysis results",
            "Throughout — all data reading and result writing in tables",
            "Make sure SKU codes are consistent across all three tables"
          ],
          [
            "Library",
            "Historical analysis reports, product image references",
            "Archive weekly reports for year-over-year comparison",
            "Name files \"Weekly_Report_YYYY-MM-DD\" for easy retrieval"
          ],
          [
            "Scheduled Task",
            "Daily anomaly monitoring, weekly auto-analysis",
            "Scenario B: automated alerts",
            "Run it manually once before setting up automation"
          ],
          [
            "Product Analysis Skill",
            "SOP for fixed analysis flow",
            "After Scenario A, solidify this into a Skill",
            "Swap data each week — no need to rewrite the prompt"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario A: Weekly Product Operations Analysis — Six-Step Pipeline, From Data to Action",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Every week, I open three tables, match SKUs, calculate metrics, make pivot tables, find anomalies, write a report — half a day. Only a few SKUs really need my judgment, but 80% of the time is spent moving data and calculating metrics.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Step 1: Data check",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Don't start by saying \"analyze the product sales.\" First check if the data is complete and SKUs can be linked."
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Upload or reference three datasets: sales detail, inventory detail, product master data (table or Library file)"
            }
          ],
          [
            {
              "text": "Ask the Agent to check: field completeness, time range, data type, duplicate records, missing values"
            }
          ],
          [
            {
              "text": "Focus on whether SKU codes can be correctly linked across the three tables"
            }
          ],
          [
            {
              "text": "Confirm data is usable before moving to analysis"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Step 2: Six-step analysis pipeline",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After data confirmation, proceed step by step — don't have the AI output everything at once:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "What to analyze",
            "Core metrics / dimensions"
          ],
          [
            "1. Results",
            "Overall business results",
            "Sales, units sold, gross profit, margin, sell-through rate, inventory value, turnover rate, turnover days"
          ],
          [
            "2. Structure",
            "Product structure",
            "Category → Price tier → SKU drill-down: sales contribution + margin contribution + inventory share"
          ],
          [
            "3. Efficiency",
            "Sales × Inventory matrix",
            "Four quadrants: high-sales high-turnover (core) / high-sales low-turnover (cash pressure) / low-sales high-inventory (risk) / low-sales low-inventory (to be determined)"
          ],
          [
            "4. Anomalies",
            "Four-dimension anomaly detection",
            "Sales, profit, inventory, sell-through — at least two indicators cross-validated, sorted by impact"
          ],
          [
            "5. Root cause",
            "Anomaly cause breakdown",
            "Sales drop? Price change? Channel change? Stockout? Promotion ended? Every conclusion must have data evidence"
          ],
          [
            "6. Actions",
            "Action plan",
            "Problem → Data evidence → Cause → Impact → Action, combined with inventory aging analysis to determine clearance or replenishment"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Step 3: Review and confirm",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "After the Agent outputs the analysis report, you: confirm whether anomaly judgments match business reality, confirm whether root cause analysis is reasonable, and make the final business decisions (replenish / clear / reprice / delist)."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nRead the sales detail, inventory detail, and product master data from the Base. First check data quality: field completeness, time range, duplicate records, missing values, whether SKU codes can be correctly linked across the three tables. Output a data quality check report, listing issues to fix. After confirming data is usable, proceed with the six-step analysis:\n\n1. Results: Summarize total sales, units sold, gross profit, margin, sell-through rate, inventory value, turnover rate, turnover days. Compare with the previous period and identify metrics with significant changes. Describe results first — don't assign causes.\n\n2. Structure: Drill down by category → price tier → SKU. Analyze sales, margin, and inventory value share. Identify the categories with the highest sales contribution, highest margin contribution, and highest inventory share.\n\n3. Efficiency: Link sales performance with inventory performance. For each SKU, calculate sales, margin, and turnover days. Classify into four types: high-sales high-turnover (core) / high-sales low-turnover (cash pressure) / low-sales high-inventory (risk) / low-sales low-inventory (to be determined).\n\n4. Anomalies: Detect anomalies from four dimensions: sales, profit, inventory, sell-through. Don't use fixed thresholds — use year-over-year, week-over-week, and category averages. Cross-validate at least two indicators. Sort by impact amount.\n\n5. Root cause: For SKUs with sales decline >20%, break down by: units sold, price, channel, stockout, promotion. Every conclusion must cite data evidence.\n\n6. Actions: For high-inventory and low-sell-through SKUs, perform inventory aging analysis (0-30/31-60/61-90/91-180/180+ days). Combine with sales trend to assess risk. Output in \"Problem → Data evidence → Cause → Impact → Action\" format.\n\nWrite all results to the \"Product Analysis\" view in the Base. Also output a summary in the conversation."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Data quality check report: field issues, missing values, SKU linkage status"
            }
          ],
          [
            {
              "text": "Six-step analysis report: from overall results to SKU-level full pipeline"
            }
          ],
          [
            {
              "text": "Anomaly SKU list: sorted by impact amount, with cause analysis and data evidence"
            }
          ],
          [
            {
              "text": "Four-quadrant matrix: core / cash pressure / inventory risk / to be determined"
            }
          ],
          [
            {
              "text": "Action recommendation list: each problem with \"Problem → Evidence → Cause → Impact → Action\""
            }
          ],
          [
            {
              "text": "All written to the table, queryable and referable anytime"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Advanced: From One-Time Analysis to a Solidified Skill",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If you re-organize the data and rewrite the prompt every week, you've just hired a smarter analyst. What you should really do is solidify this six-step analysis flow."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Use WorkSkill Maker to create a \"Product Operations Analysis Skill,\" solidifying:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Data checking rules (SKU code consistency, missing value handling, anomaly identification)"
            }
          ],
          [
            {
              "text": "Metric definitions and calculation formulas"
            }
          ],
          [
            {
              "text": "Six-step analysis standard procedure and output format"
            }
          ],
          [
            {
              "text": "Anomaly detection logic (cross-validation, category average comparison)"
            }
          ],
          [
            {
              "text": "Action output template (Problem → Evidence → Cause → Impact → Action)"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Once solidified, you just swap the data each week, and the Skill loads the analysis flow automatically. You go from \"re-doing the analysis every week\" to \"re-running the flow every week.\" See Chapter 4: \"Mastering Skills.\""
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Sub-scenario B: Inventory Risk Alerts — Daily Auto-Monitoring, From Detection to Action",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Pain Point",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Inventory risk doesn't happen once a week. SKUs turn into slow-movers, approach stockout, or exceed inventory age every single day. But I can't manually run the analysis every day. By the time the weekly report comes out, it's too late.\""
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Steps",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Set up an inventory monitoring view in the Base with: SKU, current inventory, last 7/14/30-day sales, inventory age, turnover days, safety stock level"
            }
          ],
          [
            {
              "text": "Set alert rules: turnover days > 90 AND inventory age > 60 → alert; inventory < safety stock AND sales in last 7 days → stockout alert"
            }
          ],
          [
            {
              "text": "Set up a scheduled task: every day at 9:00 AM, auto-scan the table, filter alert SKUs, generate a risk list"
            }
          ],
          [
            {
              "text": "The Agent outputs: SKU list sorted by risk level, with initial cause assessment and suggested actions"
            }
          ],
          [
            {
              "text": "You open Workbench every morning — today's risk list is ready. No data pulling needed."
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Task Instruction",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nRun daily at 9:00 AM:\nQuery the \"Inventory Monitoring\" view in the Base, scan all active SKUs, detect risks by the following rules:\n\n1. Slow-mover alert: Turnover days > 90 AND inventory age > 60 → flag \"slow-mover risk\"\n2. Stockout alert: Current inventory < safety stock AND sales recorded in last 7 days → flag \"stockout risk\"\n3. Excess aging: Inventory age > 180 days AND no sales in last 30 days → flag \"dead stock\"\n4. Abnormal fluctuation: Last 7-day sales week-over-week decline > 50% → flag \"demand drop\"\n\nOutput: SKU list sorted by risk level, including SKU, product name, risk type, risk level, current inventory, inventory age, last 7-day sales, suggested action.\nWrite to \"Daily Risk List\" view in the Base. Also output a summary in the conversation."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Expected Results",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Daily risk list: sorted by level, with suggested actions (replenish / clear / reprice / monitor)"
            }
          ],
          [
            {
              "text": "Four alert types: slow-mover risk / stockout risk / dead stock / demand drop"
            }
          ],
          [
            {
              "text": "Auto-written to the table — team members can view directly"
            }
          ],
          [
            {
              "text": "Downstream: weekly report auto-pulls this week's daily risk lists to generate a weekly inventory risk report"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Product analysis has always had a clear path: results → structure → efficiency → anomalies → causes → actions. But every step used to be manual. With Workbench, the Agent handles data movement, metric calculation, anomaly screening, and report assembly. You spend your time on business judgment and decision-making. Solidify the six-step flow into a Skill, set up the scheduled task, and product analysis goes from \"re-doing it every week\" to \"finding problems every day automatically.\""
          ]
        ]
      }
    ]
  },
  {
    "id": "4-1-project-a-permanent-home-for-ongoing-work",
    "title": "4.1 Project — A Permanent Home for Ongoing Work",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Project, Skill & Work — Turn One-Time Wins Into a System",
    "index": 24,
    "prev": "scenario-8-merchandise-planning-product-operations-analysis-inventory-risk-alerts",
    "next": "4-2-understanding-skill-what-it-is-and-why-it-matters",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "There are two ways you work with AI. One-off tasks — \"summarize this file for me\" — done, over. And ongoing work — \"I'm working on the Spring 2027 launch plan: selection this week, pricing next week, lookbook the week after.\""
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "If you start a new conversation every time for ongoing work, you re-explain the context every time. Which season. Which competitors to reference. Where the data lives. What format to output. By the third time, you're already annoyed."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Project",
            "bold": true
          },
          {
            "text": " solves that."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Is a Project",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A Project is a persistent group in the left sidebar's history. Think of it as a \"work folder\" — it holds all the conversations, files, and output under one business topic."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How it's different from a regular conversation:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "",
            "Regular conversation (session)",
            "Project"
          ],
          [
            "Context",
            "Each new session starts from scratch",
            "Sessions under the same project share context"
          ],
          [
            "Files",
            "Re-upload every time",
            "Files in the project directory are always available"
          ],
          [
            "Output",
            "Scattered across conversations",
            "Organized by project, viewable in the sidebar"
          ],
          [
            "Best for",
            "One-off tasks: translation, summary, single analysis",
            "Ongoing work: planning, product development, report series"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "When to Use a Project",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Simple rule: if what you're doing with the AI "
          },
          {
            "text": "needs more than one conversation to complete",
            "bold": true
          },
          {
            "text": ", or if your "
          },
          {
            "text": "second conversation needs to reference the first conversation's files and conclusions",
            "bold": true
          },
          {
            "text": ", use a Project."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Scenario",
            "Why use a Project",
            "Cost of not using one"
          ],
          [
            "Seasonal merchandise planning",
            "Selection→Pricing→Lookbook→Launch — multiple steps over weeks",
            "Re-explain context and re-upload files at every step"
          ],
          [
            "Client proposals",
            "Research→BP→Pitch deck→Follow-up — need to reference earlier output",
            "Can't find last week's report, context breaks"
          ],
          [
            "Recurring reports",
            "Same format, same data sources, weekly/monthly",
            "Rewrite format requirements every time, risk inconsistency"
          ],
          [
            "Product development collaboration",
            "Requirements doc→Tech Pack→Testing→Iteration — multiple people, multiple rounds",
            "Version confusion, don't know which file is latest"
          ],
          [
            "Knowledge base building",
            "Continuous collection, organization, structuring of information",
            "Output from each session scattered, can't accumulate"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "How to Create and Use a Project",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Create a project",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Click \"New Project\" in the left sidebar, name it (e.g. \"2027SS Launch Plan\"), and it appears in your history."
            }
          ],
          [
            {
              "text": "Start a conversation within the project",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Click \"New Task\" inside the project. This conversation is automatically tied to this project. Every message and every file output belongs to this project."
            }
          ],
          [
            {
              "text": "Files are persistent",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Each project has its own file directory. The selection list from the first conversation and the analysis report from the second are all in the project directory. The Agent can reference them directly in the next conversation — no re-uploading."
            }
          ],
          [
            {
              "text": "Output organized by project",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "In the left sidebar, \"Task Outputs\" groups everything by project. No digging through chat history to find files — they're under the project."
            }
          ],
          [
            {
              "text": "Context accumulates across conversations",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Multiple conversations under the same project — the Agent remembers previous context. You don't repeat \"this is the 2027SS launch plan, referencing French market data\" every time. Once is enough."
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Project vs. Memory",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You might remember Chapter 1 covered Memory. Project and Memory work at different levels:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "",
            "Memory",
            "Project"
          ],
          [
            "What it remembers",
            "Your personal preferences, habits, role (across all conversations)",
            "Files, conversations, and output under one business topic"
          ],
          [
            "Scope",
            "Global — applies to all conversations",
            "Local — only applies to conversations within this project"
          ],
          [
            "Analogy",
            "Your personal profile — what format you like, what you do",
            "A project folder — this project's materials, progress, output"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "They work together: Memory tells the Agent \"who you are.\" Project tells the Agent \"what you're working on.\""
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Project vs. Skill",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Project provides "
          },
          {
            "text": "context",
            "bold": true
          },
          {
            "text": " (files, conversation history, output). Skill provides "
          },
          {
            "text": "methodology",
            "bold": true
          },
          {
            "text": " (how to do this type of task). You can call multiple Skills within one Project — for example, in the \"2027SS Launch Plan\" project, call the \"Competitive Analysis\" Skill for research, the \"Pricing Calculator\" Skill for cost analysis, and the \"Lookbook Generator\" Skill for the presentation. Project provides the data and background. Skill provides the method. Together, they're complete \"project-based AI collaboration.\""
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Project + Automation: Keep the Business Process Running",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Project solves \"context persistence\" — you don't re-explain the background every time. But if you still have to manually start every conversation, you've only saved the repeating, not the doing."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Combine Project with scheduled tasks, and you get a complete workflow loop: "
          },
          {
            "text": "set up a scheduled trigger within the project. The AI runs on its own schedule. Results come back to the project, waiting for you.",
            "bold": true
          },
          {
            "text": " You've already seen scheduled tasks at work in Chapter 3 (contract expiry tracking, daily inventory risk alerts). Here's what you can actually solve with automation:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Scenario",
            "Pain point",
            "Trigger",
            "Automated flow"
          ],
          [
            "A. Daily fashion news push",
            "Spend 30 min browsing industry news, still miss things",
            "Scheduled trigger (daily 9:00)",
            "AI auto-searches fashion industry news (WWD / Vogue Business curated list) → filters business-relevant content → generates structured brief (3-5 core items + summary + source links) → pushes to Teams group / email"
          ],
          [
            "B. Sales data monitoring",
            "Spend 2 hours every Monday on sales comparison",
            "Scheduled trigger (weekly Mon 9:00)",
            "Pull table data → compare with last week → identify growth / decline / anomalies → generate HTML report → push to management"
          ],
          [
            "C. Competitor social media monitoring",
            "Manual competitor analysis, browsing social media",
            "Scheduled trigger (daily 8:00)",
            "Capture competitor social media → classify and analyze → generate weekly report → write to table + push"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You walk into the office and the report is already in Teams. Files are auto-classified after upload. No one triggered it. The AI ran it. That's the experience upgrade Project + automation delivers."
          }
        ]
      }
    ]
  },
  {
    "id": "4-2-understanding-skill-what-it-is-and-why-it-matters",
    "title": "4.2 Understanding Skill: What It Is and Why It Matters",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Project, Skill & Work — Turn One-Time Wins Into a System",
    "index": 25,
    "prev": "4-1-project-a-permanent-home-for-ongoing-work",
    "next": "4-3-mastering-skills-from-installation-to-creation",
    "summary": "",
    "blocks": [
      {
        "type": "heading",
        "runs": [
          {
            "text": "Skill Deep Dive: Why It Makes Your Agent Yours",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Before you create a Skill, you need to understand the logic behind it — why it's the core design that sets Workbench apart from ordinary AI chat tools."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Is a Skill",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Workbench's Agent handles understanding tasks and organizing execution. A Skill is a set of reusable instructions, scripts, reference materials, and resources that tell the Agent how to handle a specific type of task — which tools to call, what format to deliver."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A standard Skill looks like this:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nmy-skill/\n├── SKILL.md          ← Required: the skill description\n├── scripts/          ← Optional: executable scripts\n│   └── check.py\n├── references/       ← Optional: reference materials\n│   └── guide.md\n└── templates/        ← Optional: output templates\n    └── template.pptx"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Only SKILL.md is required. The simplest Skill is one Markdown file:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\n---\nname: tech-article-writing\ndescription: For writing articles about AI products, model reviews, and tech industry topics\n---\n\nWhen receiving a writing task:\n\n1. First confirm the article's core angle\n2. Find primary sources\n3. Cross-verify core facts\n4. Complete the first draft following the user's writing style\n5. Check for banned sentence patterns and AI-tainted expressions"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "How Skill Works: Progressive Loading",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The most important design of Skill isn't SKILL.md itself — it's "
          },
          {
            "text": "Progressive Loading",
            "bold": true
          },
          {
            "text": "."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Say your Agent has 20 Skills installed. It doesn't load all 20 Skills' full content into context at once. That would waste tokens and drown the model in irrelevant instructions."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The standard approach has three layers:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Layer",
            "What loads"
          ],
          [
            "Layer 1",
            "On startup, the Agent only sees each Skill's name and description. E.g.: \"pptx — handles PowerPoint creation, editing, reading tasks\" \"pdf — handles PDF extraction, merging, editing\" \"tech-article-writing — writes AI and tech industry articles\""
          ],
          [
            "Layer 2",
            "When you say \"write a product review article,\" the Agent matches the description to tech-article-writing and loads the full SKILL.md."
          ],
          [
            "Layer 3",
            "During execution, if it needs to mimic your writing style, it reads references/style.md. If it needs to check for AI-tainted phrases, it executes scripts/check-ai-phrases.py."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All Skills load only tens to hundreds of tokens of metadata at startup. The full instructions load when the Skill is activated. Other materials and scripts load on demand as needed. The benefit: you can install dozens or hundreds of Skills without slowing down response time or wasting tokens."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skill solves a long-standing AI Agent problem: "
          },
          {
            "text": "how to give the Agent lots of knowledge and methods without cramming everything into the prompt forever.",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Skill vs. Prompt — The Real Difference",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This is the most important distinction."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Dimension",
            "Prompt",
            "Skill"
          ],
          [
            "Core purpose",
            "Describe the current task",
            "Define how to do a class of tasks"
          ],
          [
            "Lifespan",
            "Usually one-off",
            "Long-term reusable"
          ],
          [
            "Trigger",
            "User types it in",
            "Agent auto-selects, or user explicitly invokes"
          ],
          [
            "Format",
            "Mostly text",
            "Folder (instructions + scripts + references + templates)"
          ],
          [
            "Context usage",
            "Goes straight into context",
            "Loaded on demand — doesn't take space when not in use"
          ],
          [
            "Reusability",
            "Copy-paste every time",
            "Natively reusable"
          ],
          [
            "Sharing",
            "Send text",
            "Full capability package, shareable with the team"
          ],
          [
            "Execution",
            "Instructions only",
            "Can call bundled scripts and tools"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Simplest version:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Prompt = task\nSkill = method"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Example: Every time you ask the Agent to write a product description, you repeat the same thing — \"use our brand voice, include fabric composition, add care instructions, format for SEO, three languages.\" Make that a Skill, and next time you just say \"write product descriptions for these SKUs.\" The brand guide, format, and language requirements are all handled automatically."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Four Core Values of Skill",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Value 1: Give the Agent procedural knowledge.",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Large models know a lot of general knowledge, but they don't know how your company does things specifically. For example, it knows SQL, but it doesn't know: which table your user IDs are in, which status must be excluded during refunds, or what the Grafana Dashboard ID is. This kind of knowledge is perfect for Skills."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Value 2: Lock down complex workflows.",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Take a market research task. With a regular prompt, the model re-thinks every time: where to find sources, what to look up first, how to verify, what to compare against, what structure to output. A Skill can lock the flow: check official websites first, then industry reports, then competitor comparison, then distill core insights. The model can do each individual step, but the Skill organizes them the way you work."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Value 3: Reduce repetitive prompts.",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In your current AI collaboration, a lot of what you say is repetitive: don't write too formally, mix long and short sentences, don't overuse bullet points, use your own judgment, keep technical content restrained, don't make up examples. These naturally belong in a writing-style Skill. From then on, your prompt is just \"write an article.\" Writing habits, source standards, banned expressions, article flow — all provided by the Skill."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Value 4: Turn personal experience into organizational assets.",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The biggest problem with traditional prompts is that they're scattered across chat history, SharePoint documents, and people's heads. Skills are files. So they can be Git-managed, version-rolled-back, team-shared, and continuously updated. One person's experience becomes the whole team's capability — that's the upgrade from \"personal prompt\" to \"organizational capability asset.\""
          }
        ]
      }
    ]
  },
  {
    "id": "4-3-mastering-skills-from-installation-to-creation",
    "title": "4.3 Mastering Skills: From Installation to Creation",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Project, Skill & Work — Turn One-Time Wins Into a System",
    "index": 26,
    "prev": "4-2-understanding-skill-what-it-is-and-why-it-matters",
    "next": "4-4-tuning-skills-when-standard-isn-t-enough",
    "summary": "",
    "blocks": [
      {
        "type": "heading",
        "runs": [
          {
            "text": "Finding and Installing Skills in Workbench",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Open "
          },
          {
            "text": "Explore",
            "bold": true
          },
          {
            "text": " in the left sidebar — it's like an app store, but instead of apps, it installs AI capabilities."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You can:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Browse recommendations",
              "bold": true
            },
            {
              "text": " — see what's available, filter by category"
            }
          ],
          [
            {
              "text": "Search",
              "bold": true
            },
            {
              "text": " — describe what you need in natural language, Workbench matches the Skill"
            }
          ],
          [
            {
              "text": "Install",
              "bold": true
            },
            {
              "text": " — click Add, confirm, done. The Skill loads into the Agent's context automatically"
            }
          ],
          [
            {
              "text": "Use",
              "bold": true
            },
            {
              "text": " — type \"/\" in the conversation to see your installed Skills, select the one you need"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Solving a Task with a Skill",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Say you have a sales data table and want the Agent to analyze trends and anomalies. Find the \"Data Analysis\" Skill in Explore, install it, then say \"analyze this table and rank SKUs by sell-through rate, flagging the 10 slowest sellers.\""
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Workbench loads the Data Analysis Skill's methodology — e.g. \"first do a data overview (row count, fields, data types)\" → \"calculate key metric distributions\" → \"flag anomalies with cause hypotheses\" → \"output a structured analysis report\" — then executes the analysis using that methodology."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You get a structured analysis report with a data overview, anomaly SKU list, trend charts, and action recommendations. You didn't write a single prompt describing the analysis steps. The Skill has built-in execution logic. You just provide the data input and review the output."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "From Using Skills to Writing Skills",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Using other people's Skills is the starting point. The real value comes from "
          },
          {
            "text": "writing your own Skills.",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You don't need to write Markdown from scratch. Workbench's SkillHub has a built-in Skill called "
          },
          {
            "text": "WorkSkill Maker",
            "bold": true
          },
          {
            "text": " — it's a Skill that creates Skills. Tell it in natural language what you want to do, and it generates the SKILL.md."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Creating Your First Skill with WorkSkill Maker",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The flow is simple:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Open the conversation, invoke WorkSkill Maker",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "In the Workbench conversation, say: \"I want to create a Skill for batch-renaming product images.\" WorkSkill Maker guides you through clarifying the requirements."
            }
          ],
          [
            {
              "text": "Describe what you want in natural language",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "WorkSkill Maker asks a few questions: what problem does this Skill solve? What's the input? What's the output? What rules must be followed? You answer like you're talking to a coworker. It formats everything into a SKILL.md."
            }
          ],
          [
            {
              "text": "Review the generated SKILL.md",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "WorkSkill Maker generates a complete Skill file. Check these key parts:"
            }
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Check item",
            "What to look for"
          ],
          [
            "name",
            "Short and clear"
          ],
          [
            "description",
            "The most important field — this determines when the Skill auto-activates. Include keywords the user might say"
          ],
          [
            "Step instructions",
            "Is the execution flow complete? Did it miss any of your experience points?"
          ],
          [
            "Notes",
            "Did it include the \"gotchas\" you told the AI about?"
          ]
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Understand the activation mechanism",
              "bold": true
            },
            {
              "text": "\nThe description field determines when the Skill activates. Example: if you're creating a \"batch-rename product images\" Skill, the description should be something like: \"For batch-renaming product images in Library, following the category_SKU_color_date naming convention. Activates when the user mentions image renaming, file name normalization, or product image rename.\"\n"
            },
            {
              "text": "This way, when you say \"rename these product images,\" the Agent auto-loads this Skill."
            }
          ],
          [
            {
              "text": "Test and iterate",
              "bold": true
            },
            {
              "text": "\n"
            },
            {
              "text": "Run the Skill once and see if the result is correct. If not, modify the SKILL.md and run again."
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Your First Skill Won't Be Perfect",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This is important: "
          },
          {
            "text": "your first version of a Skill will almost certainly be imperfect.",
            "bold": true
          },
          {
            "text": " In real use, you'll find:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Some steps the Agent misunderstood — need to rephrase"
            }
          ],
          [
            {
              "text": "Some experience you forgot to write in — the Agent missed a step"
            }
          ],
          [
            {
              "text": "Some rules need constraints — \"don't modify original files\" or \"confirm with me before executing\""
            }
          ],
          [
            {
              "text": "The description is too narrow — certain scenarios don't activate it; or too broad — it activates when it shouldn't"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This is normal. The value of a Skill is in "
          },
          {
            "text": "continuous improvement.",
            "bold": true
          },
          {
            "text": " In the conversation, you can tell the Agent:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Remember what we discussed today. This Skill's rules need updating: 1. Keep the original file name as a note when renaming; 2. Use C prefix for color codes, not D.\""
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Or even more directly:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"What can you learn from the conversation above? Remember and optimize this Skill.\""
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent incorporates your feedback into the SKILL.md. Next time, it runs with the updated rules. The more you use it, the more accurate it gets — that's the evolution from \"personal prompt\" to \"organizational capability asset.\""
          }
        ]
      }
    ]
  },
  {
    "id": "4-4-tuning-skills-when-standard-isn-t-enough",
    "title": "4.4 Tuning Skills: When Standard Isn't Enough",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Project, Skill & Work — Turn One-Time Wins Into a System",
    "index": 27,
    "prev": "4-3-mastering-skills-from-installation-to-creation",
    "next": "4-5-work-package-skills-into-a-role",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Workbench's standard pre-built Skills in SkillHub work out of the box. But what if your workflow isn't exactly the standard process? Skills aren't written once and never changed. Business changes. Skills need to iterate too."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "When to Optimize",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\n✅ Signals you need to optimize:\n  - You manually add the same info every time you use the Skill → the Skill should remember it\n  - You adjust the output format every time → the output template needs updating\n  - The Skill doesn't understand your industry terms → add terminology explanations\n  - Some steps are redundant → simplify the SOP\n  - Missing your specific business rules → add a \"Notes\" section\n\n❌ Don't optimize when:\n  - The Skill occasionally makes mistakes → it might be an input data issue, not a Skill issue\n  - You haven't used it 5+ times → use it more before deciding to change"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Optimization Examples",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Case 1: Standard \"Product Copy\" Skill doesn't fit footwear",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Original Skill output: generic product description\nYour problem: footwear needs extra fields (size, material, heel height, use case)\nOptimization method:\nTell Workbench what to adjust\n\"The product copy Skill needs footwear-specific adjustments — extra fields: size range, heel height, use case. Keep fashion industry terms in their original language (e.g. Stiletto, Derby, Loafer).\"\nWorkbench understands your intent and updates the Skill with the new fields and terminology rules. After 1-2 days of use, you can also say \"summarize my preferences from today's conversations and update this Skill\" — Workbench auto-summarizes conversation preferences (field additions, term retention, output format, etc.) and saves them as Skill preferences."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Case 2: Standard \"Resume Screening\" Skill doesn't match enough dimensions",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Original Skill: matches by skill/experience/language\nYour problem: also need to match salary expectation and start date\nOptimization method:\nTell Workbench to add matching dimensions\n\"The resume screening Skill needs two more matching dimensions: salary expectation range and earliest start date.\"\nAdd the two dimensions to the matching criteria\nAdd these two columns to the table output\nTest → publish"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Optimization Flow",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Content"
          ],
          [
            "1",
            "Identify the problem: which step needs manual adjustment every time?"
          ],
          [
            "2",
            "Locate the corresponding step/rule in the Skill's instructions"
          ],
          [
            "3",
            "Modify instructions → test → compare before and after"
          ],
          [
            "4",
            "Save when satisfied → publish new version → notify the team"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Deep Case Study: Three Paths to Skill Optimization",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Case A: Swap the template only (component-level optimization)",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Scenario: The standard Lookbook Generator Skill uses a garment template. Footwear products need a different layout. Just swap the template."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Analysis: The Skill contains an HTML template component. The template and instructions are separate.\nOptimization method:\nTell Workbench: \"The Lookbook Generator template needs to be a footwear version — full-screen image + product parameter sidebar + size chart.\"\nWorkbench auto-updates the template component — no code changes needed.\nTest → publish.\nResult: Skill updated to footwear layout, reusing all instruction logic."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Like changing a phone case — the phone didn't change, just the exterior. The Skill's logic didn't change, just the display template."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "How to Lock Down a Good Layout: 4 Methods",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Method",
            "How",
            "Best for",
            "Effect"
          ],
          [
            "1. Reference image",
            "Screenshot a layout you like → save to Library → tell the Skill \"reference this layout\"",
            "Anyone",
            "Most intuitive — AI understands the layout structure"
          ],
          [
            "2. Website reference",
            "Provide a URL → tell the Skill \"reference [website]'s layout structure\"",
            "Anyone",
            "Great for competitor / industry benchmark layouts"
          ],
          [
            "3. PPT/template file",
            "Upload a brand PPT template or PDF → save to Library → Skill references \"use [template file]'s layout\"",
            "People with brand templates",
            "Most precise — fully follows brand guidelines"
          ],
          [
            "4. Natural language description",
            "Describe the layout in words: \"full-screen image on the left, product parameter table on the right, size chart at the bottom\"",
            "Anyone",
            "Most flexible — but needs clear expression"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Prompt example:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Reference image method: \"Read [reference_layout.png] from Library as a layout reference. Generate a footwear lookbook based on this structure. Large image on the left, product parameters on the right (style number/material/size/color), size comparison chart at the bottom.\""
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Website reference method: \"Reference [brand website lookbook URL]'s layout structure. Generate a footwear product lookbook HTML with the same layout.\""
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "PPT template method: \"Read [brand_template.pptx] from Library. Strictly follow the template's layout, colors, and fonts to generate the lookbook.\""
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Natural language method: \"Generate a footwear lookbook HTML: left 60% width — full-screen product image, right 40% — product parameters (style/material/color/size), bottom bar — size comparison chart. Use brand colors [#XXX], brand font [font name].\""
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You don't need to know how to code. Find a layout you like — from a website, a competitor, or your own brand's PPT template — screenshot or upload it, and let the AI learn from it. The AI understands the layout structure and generates accordingly next time."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Solidifying the Flow",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Step",
            "Content"
          ],
          [
            "1",
            "Find a good layout reference (screenshot / URL / PPT / text description)"
          ],
          [
            "2",
            "Save to Library (image / file)"
          ],
          [
            "3",
            "Reference it in the conversation: \"reference [file name]'s layout structure\""
          ],
          [
            "4",
            "Test → adjust → when satisfied, tell Workbench \"remember this preference\""
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Case B: Add custom instructions (instruction-level optimization)",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Scenario: The standard "
          },
          {
            "text": "image-generator"
          },
          {
            "text": " Skill produces mediocre results. Designers want to add specific fashion industry prompts and workflows."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Analysis: The standard Skill's prompts are too generic — missing fashion-specific detail descriptions.\nOptimization method:\nTell Workbench to add fashion-specific prompts: \"The image-generator Skill needs fashion-specific optimization — add style constraints (editorial/campaign/street style), composition rules (full body/3/4/detail shot), lighting requirements (natural light/studio/golden hour), and brand consistency constraints (color palette, font restrictions).\"\nAdd fashion-specific rules to the prompts:\nStyle constraints: editorial / campaign / street style\nComposition rules: full body / 3/4 / detail shot\nLighting requirements: natural light / studio / golden hour\nBrand consistency: color palette, font restrictions\nTell Workbench: \"Before generating an image, search Library for reference images and extract style features.\"\nTest → compare before and after → save when satisfied."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Prompt example:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "\"Search Library for 3 reference images. Extract style features (color palette, composition, lighting, mood). Generate an image based on the product info and extracted style features. Style: editorial. Composition: full body 3/4. Lighting: natural light. Resolution: 2048×3072. Brand palette: [attach HEX].\""
          ]
        ]
      }
    ]
  },
  {
    "id": "4-5-work-package-skills-into-a-role",
    "title": "4.5 Work: Package Skills Into a Role",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Project, Skill & Work — Turn One-Time Wins Into a System",
    "index": 28,
    "prev": "4-4-tuning-skills-when-standard-isn-t-enough",
    "next": "appendix-the-ai-work-system-in-one-chapter",
    "summary": "",
    "blocks": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "By this point, you've used Projects to manage ongoing work, installed a few Skills, and even created your own. Workbench is starting to feel good. But every time you start a new task, you still have to think \"which Skills should I use this time?\""
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It's like having a toolbox with everything in it — but before every job, you have to pick the tools yourself. The fuller the toolbox, the more of a burden tool selection becomes."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Work",
            "bold": true
          },
          {
            "text": " solves that."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "What Is Work?",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One sentence: "
          },
          {
            "text": "Work is a bundle of Skills, packaged for a specific role or a complete job.",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You don't pick Skills one by one. You say \"I'm doing Amazon operations today,\" select the corresponding Work, and all the Skills it contains load as a whole. The Agent has the full capability set for that job — but note: the Agent won't automatically call the Skills. You tell it what to do in the conversation."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Analogy:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Concept",
            "Real-life analogy",
            "What it means"
          ],
          [
            "Skill",
            "A screwdriver, a hammer",
            "Single tool, does one thing"
          ],
          [
            "Work",
            "An electrician's tool kit",
            "Packed with everything the role needs — pick it up and go"
          ],
          [
            "Agent",
            "A worker",
            "Shows up empty-handed. Picks up a tool kit = becomes that trade"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Not every worker needs to know which tools an electrician carries vs. a plumber. The tool kit is already packed. You just choose which trade to work as today."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Skill vs. Work",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You might ask: I've installed some Skills, they load by default, available in every task. How is Work different from Skill?"
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The core difference is in "
          },
          {
            "text": "how they load",
            "bold": true
          },
          {
            "text": ":"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Dimension",
            "Skill",
            "Work"
          ],
          [
            "Analogy",
            "Your personal everyday tools",
            "A complete tool kit for a specific role"
          ],
          [
            "After install",
            "Loaded by default, available in every task",
            "Must be specified in the task to load; Skills inside the Work aren't auto-called — you direct the Agent"
          ],
          [
            "Best for",
            "General, cross-scenario capabilities (document summary, email draft)",
            "Role-specific or project-specific complete capability sets"
          ],
          [
            "Example",
            "\"Translate this paragraph\" → general translation Skill",
            "\"Generate this week's Amazon operations report\" → Amazon Ops Work (includes competitor monitoring + review analysis + weekly report template)"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Simply put: "
          },
          {
            "text": "Skill is a \"everyday tool.\" Work is a \"job tool kit.\"",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "For everyday general tasks, Skills are enough. But when you need to complete a full job — like generating a weekly Amazon competitor report or launching a new listing in three languages — you don't need one or two Skills. You need a coordinated set of capabilities. That's when Work is much more efficient than picking Skills one by one."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "How to Use Work",
            "bold": true
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Real Example: Amazon Operations Work",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Let's make this concrete. Imagine your company is a fashion brand with an Amazon operations specialist. What does their day look like?"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "9:00 AM, open the laptop. Check if there were any negative reviews overnight. Then check if competitors changed prices. Then check which listing's ranking dropped — adjust keywords. Afternoon: write the new listing's title and bullet points — needs SEO optimization and multi-language. Finally, the boss asks \"how's last week's ACoS?\" — another hour gone."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This is Amazon operations: "
          },
          {
            "text": "the work isn't hard, but it's incredibly fragmented, and everything is interconnected.",
            "bold": true
          },
          {
            "text": " Monitoring competitors, reading reviews, optimizing listings, checking ads, writing reports… each task needs a different capability, but they're not independent tasks — they're one complete operational chain."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With Skills, every new task means manually picking: competitor monitoring Skill, review analysis Skill, listing optimization Skill, keyword research Skill… and then explaining to the Agent how these Skills work together."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "But packaged as an "
          },
          {
            "text": "\"Amazon Operations Work\"",
            "bold": true
          },
          {
            "text": ", it becomes: pick one Work, get started."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How are these Skills built?",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The 6 Skills below aren't hypothetical. Each has a clear data source and implementation path. Some work now. Some need external data permissions confirmed first:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Skill",
            "Data source",
            "Implementation path"
          ],
          [
            "Competitor monitoring",
            "Apify Amazon Product Scraper",
            "Call Apify Actor to capture listing snapshots, write to table, diff against last snapshot"
          ],
          [
            "Review analysis",
            "Apify Amazon Reviews Scraper",
            "Capture reviews → LLM for sentiment analysis and keyword clustering"
          ],
          [
            "Listing optimization",
            "LLM generation + keyword research output",
            "Pure Skill logic — no external API needed. Keyword data from Keyword Research Skill"
          ],
          [
            "Keyword research",
            "Apify Auto-Suggest + Brand Analytics",
            "Apify captures search box long-tail keywords; search volume needs Brand Analytics CSV export"
          ],
          [
            "Ad data analysis",
            "Amazon Advertising reports",
            "Import CSV to Library first, Agent reads and analyzes; Advertising API Connector possible later"
          ],
          [
            "Operations weekly report",
            "Existing data in the table",
            "Aggregate data written by the Skills above, assemble by weekly report template"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Among these 6, competitor monitoring, review analysis, and the weekly report can be implemented directly with Apify API + LLM. Listing optimization is pure Skill logic. Keyword research and ad data analysis need Brand Analytics CSV or ad report import. "
          },
          {
            "text": "Start with competitor monitoring and review analysis — clearest data sources, simplest logic. Get these two working first to validate the full chain.",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What's in this Work?",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Skill",
            "What it does",
            "Daily use case"
          ],
          [
            "Competitor monitoring Skill",
            "Track competitor listing changes: price, title, bullet points, A+ content, BSR rank",
            "Morning check — any competitor making moves?"
          ],
          [
            "Review analysis Skill",
            "Capture user reviews (yours and competitors'), sentiment analysis, keyword extraction",
            "React to negative reviews within 24 hours, find product improvement clues"
          ],
          [
            "Listing optimization Skill",
            "Generate or optimize titles, bullet points, product descriptions, and backend keywords based on keyword research and SEO rules",
            "Write new listing copy; adjust keywords when ranking drops"
          ],
          [
            "Keyword research Skill",
            "Analyze search volume, competition, long-tail keywords, suggest PPC keywords",
            "Weekly keyword performance check, adjust ad structure"
          ],
          [
            "Ad data analysis Skill",
            "Read PPC reports, analyze ACoS, conversion rate, keyword performance, suggest bid adjustments",
            "Weekly ad review, monthly ad optimization report"
          ],
          [
            "Operations weekly report Skill",
            "Aggregate sales, reviews, ads, inventory, and competitor activity into a standardized weekly report",
            "Friday weekly report for the boss"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Scenario Demo: A Complete Operations Chain — From Monitoring Competitors to the Weekly Report",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Traditional approach: competitor monitoring in Helium 10, reviews one by one on Amazon backend, listing changes in Seller Central, ad data in Excel, weekly report on Friday night. Five tools, five switches, five fragments."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "With \"Amazon Operations Work\":"
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Open Workbench, create a new task, select \"Amazon Operations Work\" from the + menu."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sub-scenario A: Daily competitor + review check",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nToday's Amazon operations check:\n- My listings: B0DXXXXXX (Women's knit cardigan), B0DYYYYYY (Men's jacket)\n- Competitors: 3 ASINs in the same category\n- Check:\n  1. Did any competitor change price overnight? What's the price gap with mine?\n  2. Did any competitor change their title/bullet points? List changes if any.\n  3. How many new reviews for me and competitors? Sentiment (positive/negative/neutral)?\n  4. What are the common issues in negative reviews? (size/fabric/logistics/other)\n- Output: Write to the \"Daily Check\" view in the table, one row per ASIN"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent calls:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Competitor Monitoring Skill",
              "bold": true
            },
            {
              "text": " → captures current listing state, diffs against last snapshot"
            }
          ],
          [
            {
              "text": "Review Analysis Skill",
              "bold": true
            },
            {
              "text": " → pulls latest reviews, sentiment analysis, keyword clustering"
            }
          ],
          [
            {
              "text": "Operations Weekly Report Skill",
              "bold": true
            },
            {
              "text": " → writes results to the table, structured"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "About 3 minutes later, you have a check table in the table: one row per ASIN, price changes, listing changes, new review count, sentiment breakdown, negative review keywords. All clear at a glance."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sub-scenario B: New listing launch — one-click listing generation",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "New listing launch is one of the most fragmented tasks: the title needs keywords and readability, bullet points need features and specs, and backend search terms need filling."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nNew listing generation:\n- Product: Women's cashmere scarf, ASIN pending\n- Product images in Library /2026-FW/Accessories/Scarves\n- Target markets: US + EU (English/German/Italian)\n- Input:\n  - Product name: 100% Cashmere Scarf\n  - Selling points: Reversible, lightweight warm, classic plaid, gift-ready packaging\n  - Specs: 140cm × 35cm, 230g, 100% cashmere\n- Output:\n  1. Title (≤200 characters, with core keywords)\n  2. Bullet points (5, ≤500 characters each, features + specs)\n  3. Product description (≤2000 characters)\n  4. Backend search terms (≤250 characters)\n  5. English → German → Italian versions\n- Constraint: Keywords from real Keyword Research Skill data — don't fabricate\n- Acceptance: Title includes \"cashmere scarf\" and \"women's.\" Each bullet point has one core selling point"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The Agent calls:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Keyword Research Skill",
              "bold": true
            },
            {
              "text": " → pulls \"cashmere scarf\" and related keywords: search volume, competition, long-tail terms"
            }
          ],
          [
            {
              "text": "Listing Optimization Skill",
              "bold": true
            },
            {
              "text": " → generates title, bullets, description, and search terms in each language based on keyword data and product info"
            }
          ],
          [
            {
              "text": "Multi-language copy generation Skill",
              "bold": true
            },
            {
              "text": " → translates English to German and Italian, preserving SEO structure"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You get a complete three-language listing set, ready to copy and paste into Amazon Seller Central."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sub-scenario C: Friday weekly report — from 2 hours to 10 minutes",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "text\nGenerate this week's Amazon operations weekly report:\n- Time range: Last Monday to this Sunday\n- Sections:\n  1. Sales overview: total revenue, units ordered, return rate (vs. last week)\n  2. Review dynamics: new review count, average star rating, Top 3 negative review reasons\n  3. Competitor changes: price adjustments, listing modifications, new launches\n  4. Ad performance: total spend, ACoS, conversion rate, Top 5 spend keywords\n  5. Next week focus: 3 action items based on the above data\n- Data sources: \"Daily Check\" table + ad reports + inventory table\n- Format: Write to \"Weekly Report\" view in the table, also output summary in conversation"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The weekly report is a summary task. You tell the Agent to aggregate the week's data. The Agent reads from the table — the data written by the previous sessions' checks, ad reports, and review analysis — and assembles a standardized report using the "
          },
          {
            "text": "Operations Weekly Report Skill",
            "bold": true
          },
          {
            "text": ". The prerequisite: each previous session wrote its data to the table."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "💡 This is the core value of Work: the Amazon ops specialist's five fragmented tasks — monitoring competitors, reading reviews, writing listings, checking ads, producing weekly reports — no longer need five tools and five switches. Pick one Work. Five tasks in one conversation, strung together into a chain."
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Three steps:"
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "1. Find the right Work in Explore",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Open Explore in the left sidebar. You'll see four tabs: App, "
          },
          {
            "text": "Work",
            "bold": true
          },
          {
            "text": ", Skills, Connectors. Click Work, browse available tool kits."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Each Work card shows:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Who this Work is for (e.g. \"Amazon Operations Specialist\")"
            }
          ],
          [
            {
              "text": "Which Skills are bundled inside"
            }
          ],
          [
            {
              "text": "One sentence about what it does"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "2. Install the Work",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Same as installing a Skill — click Add. But the difference: after installation, the Work's Skills aren't all loaded into every task immediately. They're \"on standby,\" waiting for you to specify the Work in a specific task."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You can enable or disable individual Skills inside the Work in User Capability Management. Turn off what you don't need. Make sure the ones you need are on."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "3. Use the Work in a task",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Start a new task. Click the "
          },
          {
            "text": "+ menu",
            "bold": true
          },
          {
            "text": " next to the input box. Select the Work you want to use. All enabled Skills inside that Work load as a whole into the task's Agent context."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "You don't pick individual sub-Skills in the task — the Work's Skills load as a whole. But remember: the Agent won't automatically call the Skills. You need to tell the Agent what to do."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Recommended approach:",
            "bold": true
          },
          {
            "text": " Create different sessions within a Project for different tasks. For example, with Amazon Operations Work: one session for competitor check, one for review analysis, one for listing writing. Each session does one thing. The Agent calls the corresponding Skill based on your instructions. Earlier sessions write data to the table. Later sessions (like the weekly report) read from the table to aggregate."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Work Management Rules",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "As a user, you don't need to memorize many rules. But a few key points are worth knowing:"
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Rule",
            "Description"
          ],
          [
            "Work has its own Skills",
            "Skills inside a Work are plugin-level. They don't appear in the main Skills list. You manage them inside the Work"
          ],
          [
            "Loads as a whole, can't split",
            "When you specify a Work, all enabled Skills inside load together. You can't pick \"only Skill A from this Work\" in a task"
          ],
          [
            "Toggle anytime",
            "You can disable unneeded Skills inside the Work in User Capability Management. Next load, they won't come"
          ],
          [
            "Version updates are full snapshots",
            "When a Work is updated, all files inside are replaced as one snapshot. You can't update just one Skill"
          ],
          [
            "One task can use both Skill and Work",
            "Your everyday general Skills are always there. Specifying a Work adds a role capability layer on top"
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "When to Use Skill vs. When to Use Work",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Scenario",
            "Recommendation",
            "Reason"
          ],
          [
            "Translate this paragraph for me",
            "Skill",
            "Single task, general capability is enough"
          ],
          [
            "Summarize these meeting minutes",
            "Skill",
            "Single task"
          ],
          [
            "Check if competitors changed prices today",
            "Work",
            "Needs competitor monitoring + data comparison + table write"
          ],
          [
            "Write and launch the new listing in three languages",
            "Work",
            "Needs keyword research + listing optimization + multi-language generation"
          ],
          [
            "Generate this week's Amazon operations report",
            "Work",
            "Needs to aggregate competitor, review, ad, and sales data from multiple sources"
          ],
          [
            "Write a follow-up email",
            "Skill",
            "Single task"
          ]
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Rule of thumb: If a task needs only one capability, use a Skill. If it needs multiple capabilities working together as a job workflow, use a Work."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Summary",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "What's your role? What are the daily tasks that chain together? Package them into a Work, and you have a dedicated tool kit you can pick up and go. We're looking forward to your case — what does your Work look like, what Skills are in it, what problem does it solve? Share it with us, and let more people's Agents feel more like real colleagues."
          ]
        ]
      }
    ]
  },
  {
    "id": "appendix-the-ai-work-system-in-one-chapter",
    "title": "Appendix: The AI Work System in One Chapter",
    "chapterId": "chapter-4-project-skill-work-turn-one-time-wins-into-a-system",
    "chapterTitle": "Chapter 4 · Project, Skill & Work — Turn One-Time Wins Into a System",
    "index": 29,
    "prev": "4-5-work-package-skills-into-a-role",
    "next": null,
    "summary": "",
    "blocks": [
      {
        "type": "table",
        "rows": [
          [
            "Optional reading. If you're curious about how all this actually works under the hood, this chapter gives you the full picture. It won't affect your day-to-day use — but if you read it once, you'll debug faster, pick models smarter, and design workflows with more confidence."
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "The Big Picture: What Happens Inside an AI Task",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nUser goal + materials → Agent plans → LLM understands & generates\n                          ↓                    ↓\n                    Skill methods & scripts    Intermediate results\n                          ↓                    ↓\n                    Tool / Connector       → Checkpoint & review → Final output\n                          ↓\n                    MCP / API → Files, spreadsheets & business systems"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One sentence: the model handles understanding and generation; the Agent organizes action around the goal; Skill provides the playbook; tools and MCP/API let action reach the real world; you own the boundaries and the final sign-off."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Here's the flow in practice: you state a goal → the Agent breaks it into steps → when it hits a specialized subtask, it loads the relevant Skill → when it needs to touch an external system, it calls a tool → the tool reads or writes databases, sends messages, or edits files through MCP or API → results come back to the model, which decides what to do next → you review, approve, or redirect."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Of the five roles, the model is the brain, the Agent is the dispatcher, Skill is the specialist's manual, tools and interfaces are the hands and feet, and you're the decision-maker. Each section below unpacks one role — and marks where its power ends."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "LLM: The Foundation Model That Predicts What Comes Next",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "LLM stands for Large Language Model. It learns patterns of language and knowledge from massive datasets, then generates the most probable continuation of whatever you give it. It's essentially a \"predict the next thing\" engine — not a database, and not someone who takes responsibility for you."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What it's good at:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Understanding, summarizing, and rewriting text"
            }
          ],
          [
            {
              "text": "Extracting structure from raw material"
            }
          ],
          [
            {
              "text": "Generating drafts, proposals, and code"
            }
          ],
          [
            {
              "text": "Mimicking format and style from examples"
            }
          ],
          [
            {
              "text": "Continuing analysis after tools return results"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What it doesn't naturally guarantee:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "It doesn't guarantee every fact is correct"
            }
          ],
          [
            {
              "text": "It doesn't know your company's latest internal state unless you give it materials or connect it to systems"
            }
          ],
          [
            {
              "text": "It doesn't magically have real evidence just because it sounds confident"
            }
          ],
          [
            {
              "text": "It doesn't automatically have access to your files, accounts, databases, or network"
            }
          ],
          [
            {
              "text": "It doesn't take business or legal responsibility"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Why does it \"hallucinate\"?",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The model's job is to generate coherent content, not to be a built-in fact database. When data is missing, the question is vague, or it's asked to give a definite answer, it may fill the gap with something plausible but untrue. This isn't a bug — it's a side effect of \"probabilistic completion.\" Once you understand that, you stop asking \"why did it say that so confidently if it's wrong?\" — confidence and correctness are two different things."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How to reduce hallucinations:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Provide reliable source material"
            }
          ],
          [
            {
              "text": "Ask for citations (make it say where each conclusion comes from)"
            }
          ],
          [
            {
              "text": "Allow it to answer \"I can't confirm that\""
            }
          ],
          [
            {
              "text": "Separate fact extraction from suggestion generation"
            }
          ],
          [
            {
              "text": "Review high-impact conclusions manually"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Tokens and Context Windows: How Much Can the Model See at Once",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A token is the basic unit a model processes — it's not exactly a word. In Chinese, a single character might be one token or several. Code and punctuation are counted separately. The context window is the total amount of input, conversation history, and output a model can handle in a single inference."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Think of tokens as the model's short-term memory capacity: if it fits, the model can see it. If it doesn't, something gets dropped or compressed."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A longer context isn't always better",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Cramming every file and months of conversation into one task can cause:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "New instructions conflicting with old ones"
            }
          ],
          [
            {
              "text": "Critical data getting buried under irrelevant content"
            }
          ],
          [
            {
              "text": "Higher cost and longer wait times"
            }
          ],
          [
            {
              "text": "The model referencing an outdated version"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Bigger windows don't mean clearer vision. They can mean more noise."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A safer approach:",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Organize your project into \"current rules, confirmed facts, decision records, and this input.\" For long-running projects, use files and project memory instead of relying on infinite conversation. In short: don't treat your chat history as a database. Put things where they belong."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Prompt: A Task Brief, Not a Magic Spell",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A prompt is what you give the model or Agent — your goal, background, materials, constraints, examples, and output expectations. A good prompt isn't measured by length, but by whether it gives enough information to execute and validate. Writing a prompt isn't \"casting a spell\" — it's writing a task brief you'd hand to a colleague."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The six elements:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Element",
            "What it answers"
          ],
          [
            "Goal",
            "What problem are we solving"
          ],
          [
            "Input",
            "What materials or systems are involved"
          ],
          [
            "Action",
            "Analyze, organize, generate, or write"
          ],
          [
            "Constraints",
            "What not to do, what rules to follow"
          ],
          [
            "Output",
            "What file or structure to deliver"
          ],
          [
            "Validation",
            "What counts as correct and usable"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The most overlooked element is validation. Without a validation standard, the model delivers whatever it thinks is right — and you have no way to say where it went wrong."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Prompt, Task Card, and SOP:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Prompt: how to say it this time"
            }
          ],
          [
            {
              "text": "Task Card: a fillable structure for recurring tasks"
            }
          ],
          [
            {
              "text": "SOP: fixed steps, roles, checkpoints, and exception handling"
            }
          ],
          [
            {
              "text": "Skill: a packaged SOP with scripts and resources, ready to execute"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "These four form a progression from \"one-time instruction\" to \"reusable capability.\" Not every prompt deserves to become a Skill. Let it succeed first, then solidify. Run a task three to five times and confirm the pattern is stable before you invest in packaging it."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Agent: An Executor That Cycles Around a Goal",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "An Agent doesn't just \"answer once.\" It runs a continuous loop: understand the goal, observe the environment, decide what to do next, call a tool, read the result, revise the plan — until it delivers or hits a stop condition."
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\nReceive goal → Observe materials & state → Plan next step → Call tool → Read result & errors → Check: done? Pause? Continue?"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A chat model is \"you ask, it answers.\" An Agent is \"you set a goal, it drives itself forward, checking results and adjusting course along the way.\""
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Agent vs. Chat Model:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Dimension",
            "Chat Model",
            "Agent"
          ],
          [
            "Core action",
            "Generate a response",
            "Plan, call tools, execute, deliver"
          ],
          [
            "What it works with",
            "The current conversation",
            "Files, tools, systems, task state"
          ],
          [
            "Process",
            "Usually one-shot",
            "Multiple rounds of observation and action"
          ],
          [
            "Risk",
            "Content errors",
            "Content errors + real-world impact"
          ],
          [
            "Control",
            "Prompt and review",
            "Permissions, checkpoints, logs, rollback"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The critical difference is in the last row: a chat model that's wrong just misleads you. An Agent that's wrong can delete files, send emails, or modify a database. That's why an Agent needs guardrails, not smarter prompts."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "When an Agent should stop:",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A good Agent doesn't \"always find a way to continue.\" It should pause and ask for human help when:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "A key input is missing"
            }
          ],
          [
            {
              "text": "Goals conflict"
            }
          ],
          [
            {
              "text": "Permissions are insufficient"
            }
          ],
          [
            {
              "text": "Cost is over budget"
            }
          ],
          [
            {
              "text": "The action is irreversible"
            }
          ],
          [
            {
              "text": "The result can't be validated"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Knowing when to stop and ask is more professional than pushing through. An Agent that never stops is more dangerous than one that's slow."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Tool: Making the Agent Actually Do Things",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A Tool is a concrete capability an Agent can call — read a file, run a search, generate a spreadsheet, send a message. A Connector is a pre-packaged third-party service connection, designed for authorized use."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Knowing isn't the same as doing:",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A model can explain \"how to send an email,\" but it can only create a draft or send it once it has an email tool and account permissions. A model can write SQL, but it can only query a database if it has the database tool, network access, and credentials."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "This is the most common misunderstanding new users have: just because the model "
          },
          {
            "text": "knows",
            "italic": true
          },
          {
            "text": " something doesn't mean it "
          },
          {
            "text": "can do",
            "italic": true
          },
          {
            "text": " it. Whether it can depends on whether the right tools, permissions, and connections are in place. When a task fails, start with \"are the tools connected and authorized?\" — not \"is the model smart enough?\""
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Five questions for every tool:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Whose identity does it use?"
            }
          ],
          [
            {
              "text": "What can it read?"
            }
          ],
          [
            {
              "text": "What can it modify?"
            }
          ],
          [
            {
              "text": "Where does the data go?"
            }
          ],
          [
            {
              "text": "How does it stop and roll back on failure?"
            }
          ]
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Skill: Reusable Expertise for Specialized Work",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A Skill isn't a smarter model. It's a package of instructions, scripts, knowledge, and templates organized around a specific type of task, so the Agent executes it more consistently."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The value of a Skill isn't \"make the model better\" — it's \"lock down the steps that are easy to get wrong or skip.\" If you ask a model to process an invoice from scratch ten times, you might get three different approaches. With a Skill, all ten runs follow the same proven path."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What a Skill can contain:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Plain Text\ninvoice-skill/\n├── SKILL.md          # Triggers, steps, boundaries, output\n├── references/       # Fields, categories, business rules\n├── scripts/          # OCR, validation, table processing\n├── templates/        # Excel and report templates\n└── tests/            # Normal and edge-case samples"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "SKILL.md is the entry point — it tells the Agent \"when to use me, how, and where my boundaries are.\" References hold the business knowledge. Scripts hold the code that actually runs. Templates keep output format consistent. Tests make sure edge cases are covered."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Skill vs. Prompt:",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "A Prompt usually affects only the current conversation. A Skill can be called across different tasks and carries scripts, resources, and a stable process. But a Skill can still fail, and it may still request local, network, or third-party permissions."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Remember: Skill is a \"method package,\" not a \"capability guarantee.\" Install a Skill and the Agent is more likely to follow the right path — but it doesn't mean it will never make mistakes."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Risks of third-party Skills:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Reading unnecessary local directories"
            }
          ],
          [
            {
              "text": "Sending your input materials externally"
            }
          ],
          [
            {
              "text": "Accessing your API keys or accounts"
            }
          ],
          [
            {
              "text": "Executing system commands"
            }
          ],
          [
            {
              "text": "Containing malicious prompts or code"
            }
          ],
          [
            {
              "text": "Relying on dependencies that are outdated or unmaintained"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Always check the source, code, permissions, network access, credentials, cost, and deactivation method. Test in an isolated directory first. Third-party Skills are like browser extensions — convenient, but check what permissions they're asking for."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "MCP: The Standard Interface for AI Tools and Data",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "MCP stands for Model Context Protocol. It defines how an AI client discovers and calls external tools, reads resources, or fetches prompt templates. Think of it as a standard interface for the AI tool ecosystem."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Think of MCP as the \"USB-C port for AI\": tool providers expose their capabilities through one standard, and AI clients consume them through the same standard. No more custom adapters for every integration."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What MCP solves:",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Without MCP, every AI product builds a custom integration for every system — high integration cost. MCP lets tool providers and AI clients describe capabilities in a unified way, reducing repeated adaptation. No MCP? Connecting a CRM means writing one adapter, connecting a database means writing another. With MCP, the provider exposes once, and every MCP-enabled client can use it directly."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "What MCP doesn't solve:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "It doesn't automatically check whether data is compliant"
            }
          ],
          [
            {
              "text": "It doesn't guard your API keys for you"
            }
          ],
          [
            {
              "text": "It doesn't guarantee the tool's result is correct"
            }
          ],
          [
            {
              "text": "It doesn't enforce identity or minimum permissions"
            }
          ],
          [
            {
              "text": "It doesn't mean you can open production writes just because the connection is there"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "MCP solves \"how to connect.\" It doesn't solve \"is it safe and correct after connecting.\" That part is still your responsibility."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "User-level vs. Project-level:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "User-level: shared capabilities reused across multiple projects"
            }
          ],
          [
            {
              "text": "Project-level: tools specific to a client, database, or business domain"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Sensitive connections should be isolated at the project level to avoid cross-project misuse. Your production database, for example, should only be connected inside the project that needs it — not set as a global user-level resource that an unrelated task could accidentally touch."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "API and MCP: How They Relate",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "An API is an interface between pieces of software — for example, querying data or creating a record over HTTP. An MCP Server can call one or more APIs internally, then expose them as tools in a way that's easier for an Agent to use."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One sentence: API is the foundation, MCP is the door built on top of it that the Agent can walk through directly. An Agent usually doesn't talk to a pile of raw APIs — it goes through an MCP Server that calls them."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "API directly or MCP?",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Direct API gives you more flexibility, but you need to understand authentication, parameters, errors, and rate limits"
            }
          ],
          [
            {
              "text": "A mature MCP wrapper is more convenient, but you still need to audit what requests and permissions it encapsulates"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Convenience doesn't mean skip the audit. MCP saves you the adapter work, but you still need to know \"what API is it calling underneath, and what permissions is it using?\""
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Knowledge Base, RAG, and Memory",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "All three are about \"what does the AI base its answers on\" — but they store different things and fail in different ways."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Knowledge Base:",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Stores searchable policies, products, cases, SOPs, and other reference materials. It answers \"what does the AI rely on\" — but that doesn't mean the AI permanently remembers everything. A knowledge base is an external reference room. The model checks it when needed, but doesn't guarantee it'll remember next time."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "RAG:",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "RAG stands for Retrieval-Augmented Generation. The system first finds relevant fragments from the knowledge base, then provides them to the model for answering. Quality depends on the source material quality, chunking strategy, metadata, retrieval accuracy, and citation mechanism."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "RAG isn't \"connect a knowledge base and get smart.\" It's a chain: bad source material, poor chunking, or biased retrieval, and the answer will be off. The citation mechanism matters — being able to see which source a conclusion came from is how you decide whether to trust it."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Memory:",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Memory stores preferences, long-term rules, project decisions, or historical state. Bad memory gets amplified over time, so important information should have a source, date, owner, and update mechanism."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The most dangerous thing about memory is that \"it doesn't know it's expired.\" A wrong rule from six months ago gets treated as truth by the Agent, over and over."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The difference between the three:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Concept",
            "What it stores",
            "Main risk"
          ],
          [
            "Conversation context",
            "Current task discussion",
            "Too long, conflicting, outdated"
          ],
          [
            "Knowledge Base / RAG",
            "Searchable facts and reference materials",
            "Poor source quality, outdated version, not found"
          ],
          [
            "Memory",
            "Preferences, long-term rules, project state",
            "Errors get reinforced over time"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One sentence: context is this conversation's short-term memory, a knowledge base is a reference library you can check anytime, and memory is the long-term settings that persist across tasks."
          }
        ]
      },
      {
        "type": "heading",
        "runs": [
          {
            "text": "Workflow vs. Agent: What's the Difference",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "We've covered Agent, but there's another term that often gets mixed up: Workflow. They're not alternatives — they're two different approaches to organizing action."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "One sentence each:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Workflow is a standardized production line: the steps are designed upfront and execute in order or by branch."
            }
          ],
          [
            {
              "text": "Agent is a thinking executor that makes its own decisions: you give it a goal, and it figures out the path at runtime."
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Think of a Workflow as a written SOP that says \"Step 1: do A. Step 2: do B. If B passes, do C. Otherwise, do D.\" An Agent is like hiring someone and saying \"process these invoices\" — they figure out which one to check first and ask you when they're stuck."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "The core difference: who decides",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "In a Workflow, every \"which path to take\" is decided at design time. In an Agent, the next step is decided by the model at runtime based on the current environment. Everything else flows from this difference."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Comparison table:",
            "bold": true
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            "Dimension",
            "Workflow",
            "Agent"
          ],
          [
            "One sentence",
            "Standardized production line",
            "Thinking executor that makes its own calls"
          ],
          [
            "Path preset?",
            "Yes, steps defined at design time",
            "No, determined at runtime by context"
          ],
          [
            "When decisions are made",
            "Design time",
            "Execution time"
          ],
          [
            "Who chooses next step",
            "Process definition",
            "The model itself"
          ],
          [
            "Controllability",
            "High, easy to predict and roll back",
            "Lower, paths may vary"
          ],
          [
            "Debug difficulty",
            "Low, clear step-by-step trace",
            "High, needs logs and intermediate state"
          ],
          [
            "Best for",
            "Clear steps, repeatable, compliance-heavy",
            "Uncertain paths, needs environment feedback, open-ended goals"
          ],
          [
            "Typical failure",
            "Stuck on a step, branch not covered",
            "Drifts, infinite loops, unauthorized actions"
          ],
          [
            "Relationship with LLM",
            "Pipeline can embed models, but control flow is human-defined",
            "Model drives the control flow"
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "When to use Workflow:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Fixed SOPs, like \"receive ticket → classify → assign to the right person\""
            }
          ],
          [
            {
              "text": "Batch processing, like \"compress and watermark 100 images\""
            }
          ],
          [
            {
              "text": "Compliance approval, where every step needs an audit trail"
            }
          ],
          [
            {
              "text": "Repeatable report generation"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "These tasks have clear paths. Workflow is more stable, cheaper, and easier to audit."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "When to use Agent:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Goal is clear but the path isn't, like \"research competitors and produce a comparison report\""
            }
          ],
          [
            {
              "text": "Multiple tools need exploration, with decisions made mid-way"
            }
          ],
          [
            {
              "text": "The environment changes and needs real-time adjustment"
            }
          ],
          [
            {
              "text": "Open-ended tasks that are hard to write as fixed steps"
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Common misconceptions:",
            "bold": true
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "\"Agent is always better than Workflow\" — No. For deterministic tasks, Workflow is more stable and cheaper. Forcing an Agent onto a clear path just makes it harder to audit and more expensive."
            }
          ],
          [
            {
              "text": "\"Workflow can't be intelligent\" — Wrong. A Workflow node can absolutely call a model for summarization, classification, or extraction. The model handles the smarts; the Workflow decides which path to take."
            }
          ],
          [
            {
              "text": "\"Full autonomy is best\" — Too much freedom makes failures harder to diagnose. In truly complex systems, it's often an Agent at the high level making decisions, with stable sub-tasks handed off to Workflows."
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "How they work together:",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "It's not an either-or. They nest:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Agent containing Workflow: the Agent writes stable sub-tasks as fixed processes (a Skill backed by a Workflow), only making its own decisions where uncertainty remains"
            }
          ],
          [
            {
              "text": "Workflow node calling an Agent: a production line's judgment node hands off unstructured input to an Agent for processing"
            }
          ]
        ]
      }
    ]
  }
];

export function getSectionById(id: string) {
  return playbookSections.find((section) => section.id === id);
}
