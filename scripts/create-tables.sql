-- Create proposals table
CREATE TABLE IF NOT EXISTS proposals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  client_company TEXT NOT NULL,
  client_contact TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_industry TEXT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  pricing_data JSONB DEFAULT '[]'::jsonb,
  demo_links TEXT[] DEFAULT ARRAY[]::TEXT[],
  terms_conditions TEXT,
  expiration_date TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'viewed', 'accepted', 'declined')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  view_count INTEGER DEFAULT 0,
  last_viewed_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own proposals" ON proposals
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own proposals" ON proposals
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own proposals" ON proposals
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own proposals" ON proposals
  FOR DELETE USING (auth.uid() = user_id);

-- Allow public access to proposals for viewing (we'll handle security in the app)
CREATE POLICY "Public can view proposals" ON proposals
  FOR SELECT USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_proposals_updated_at BEFORE UPDATE
  ON proposals FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
