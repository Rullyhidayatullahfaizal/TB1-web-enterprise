import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://juvrngetoztxrrqxogop.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dnJuZ2V0b3p0eHJycXhvZ29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4ODQzMTQsImV4cCI6MjAxMzQ2MDMxNH0.HQIUTSG_TszQ61qVpKMrIAqcEymecxNZaSErmDwZHhA'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)