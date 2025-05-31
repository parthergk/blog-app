flowchart TD
    A[User Visits Blog] --> B{Page Type?}
    
    B -->|Home Page| C[Load Home Page]
    B -->|Blog List| D[Load Blog List]
    B -->|Single Post| E[Load Blog Post]
    B -->|Components| F[Load Component Showcase]
    B -->|Search| G[Search Handler]

    %% Home Page
    C --> C1[Hero Animation]
    C --> C2[Featured Posts]
    C --> C3[Component Categories]
    C1 --> H[Render Page]
    C2 --> H
    C3 --> H

    %% Blog List
    D --> D1[Fetch All Posts]
    D --> D2[Apply Filters]
    D1 --> I[Process Posts]
    D2 --> I
    I --> J[Render Post Cards]
    J --> H

    %% Single Post
    E --> E1[Parse MDX Content]
    E --> E2[Extract Components]
    E --> E3[Generate TOC]
    E1 --> L[Process Content]
    E2 --> L
    E3 --> L
    L --> M[Render Blog Post]
    M --> N[Interactive Elements]
    N --> H

    %% Component Showcase
    F --> F1[Load Component Library]
    F --> F2[Category Filtering]
    F1 --> P[Component Grid]
    F2 --> P
    P --> Q[Interactive Demos]
    Q --> H

    %% Search
    G --> G1[Search Index]
    G --> G2[Fuzzy Matching]
    G1 --> R[Search Results]
    G2 --> R
    R --> S[Render Results]
    S --> H

    %% Post-Render Enhancements
    H --> T[Apply Framer Motion]
    T --> U[Responsive Layout]
    U --> V[SEO Optimization]
    V --> W[Performance Monitoring]
    W --> X[User Interaction]

    %% User Actions
    X --> Y{User Action?}
    Y -->|Navigate| Z[Route Change]
    Y -->|Search| G
    Y -->|Filter| AA[Update Filters]
    Y -->|Copy Code| BB[Clipboard API]
    Y -->|Share| CC[Social Share]

    Z --> EE[Next.js Router]
    EE --> FF[Page Transition]
    FF --> B

    AA --> GG[Update State]
    GG --> HH[Re-render Components]
    HH --> H

    BB --> II[Copy Success]
    II --> JJ[Toast Notification]
    JJ --> H

    CC --> KK[Open Share Dialog]
    KK --> H

    %% Data Layer
    subgraph DataLayer ["Data Layer"]
        NN[MDX Files]
        OO[Component Library]
        PP[Search Index]
    end

    %% Processing Layer
    subgraph ProcessingLayer ["Processing Layer"]
        RR[MDX Parser]
        SS[Content Processor]
        TT[Component Resolver]
    end

    %% API Layer
    subgraph APILayer ["API Layer"]
        VV[/api/posts]
        WW[/api/search]
        XX[/api/components]
    end

    NN --> RR
    RR --> VV
    SS --> VV
    OO --> TT
    TT --> XX
    PP --> G1
    WW --> G1
    XX --> F1
    VV --> E1

    %% User Journey
    subgraph UserJourney ["User Journey"]
        DDD[Landing]
        EEE[Discovery]
        FFF[Reading]
        GGG[Interaction]
    end

    C --> DDD
    D --> EEE
    E --> FFF
    X --> GGG

    %% Styling
    classDef startNode fill:#e1f5fe
    classDef processNode fill:#e8f5e8
    classDef userNode fill:#fff3e0
    classDef dataNode fill:#f3e5f5
    classDef apiNode fill:#e0f2f1

    class A startNode
    class H,M,P processNode
    class X,Y userNode
    class NN,OO,PP dataNode
    class VV,WW,XX apiNode
