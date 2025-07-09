export const sampleProposals = [
  {
    id: "1",
    title: "E-commerce Web Application for Retail Business",
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    view_count: 12,
    client_company: "ABC Retail Store",
    client_contact: "John Doe",
    client_email: "john@abcretail.com",
    client_industry: "retail",
    description: `Complete e-commerce web application with inventory management, order processing, and customer management system.

Key Features:
• Product catalog with categories and variants
• Shopping cart and checkout system
• Order management and tracking
• Customer registration and profiles
• Inventory tracking with low-stock alerts
• Sales reporting and analytics
• Payment gateway integration
• Responsive design for mobile and desktop`,
    pricing_data: [
      {
        id: "1",
        description: "Standard Web Application Package - E-commerce Solution",
        quantity: 1,
        rate: 85000,
        amount: 85000,
      },
      {
        id: "2",
        description: "Payment Gateway Integration (PayPal, Stripe)",
        quantity: 1,
        rate: 15000,
        amount: 15000,
      },
    ],
    terms_conditions: `Payment Terms: 30% down payment, 30% at midway milestone, 40% upon completion.
    
Project includes:
- 6 months free support and maintenance
- User training sessions
- Documentation and source code
- SSL certificate and security setup
- Mobile-responsive design
- SEO optimization

Additional costs may apply for:
- Third-party API integrations beyond scope
- Custom reporting requirements
- Additional user training sessions
- Travel expenses for onsite visits outside Metro Davao`,
    expiration_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    status: "sent" as const,
  },
  {
    id: "2",
    title: "Manufacturing ERP System",
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    view_count: 8,
    client_company: "XYZ Manufacturing Corp",
    client_contact: "Maria Santos",
    client_email: "maria@xyzmanufacturing.com",
    client_industry: "manufacturing",
    description: `Comprehensive ERP system for manufacturing operations including production planning, inventory management, quality control, and financial reporting.

Modules Included:
• Production Planning & Scheduling
• Raw Materials & Inventory Management
• Quality Control & Inspection
• Work Order Management
• Equipment Maintenance Tracking
• Financial Reporting & Accounting Integration
• Multi-location Support
• Advanced Analytics Dashboard`,
    pricing_data: [
      {
        id: "1",
        description: "Advanced Web Application Package - Manufacturing ERP",
        quantity: 1,
        rate: 150000,
        amount: 150000,
      },
      {
        id: "2",
        description: "QuickBooks Integration Module",
        quantity: 1,
        rate: 50000,
        amount: 50000,
      },
      {
        id: "3",
        description: "Multi-branch Setup (3 locations)",
        quantity: 3,
        rate: 3500,
        amount: 10500,
      },
    ],
    terms_conditions: `Payment Terms: 30% down payment, 30% at midway milestone, 40% upon completion.

Enterprise Package includes:
- 12 months free support and maintenance  
- Comprehensive user training program
- Data migration from existing systems
- Advanced security and backup setup
- API documentation
- Priority support channel

Monthly hosting and support: ₱2,500/month after free period
Onsite training and setup: Included in package price`,
    expiration_date: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
    status: "viewed" as const,
  },
]
