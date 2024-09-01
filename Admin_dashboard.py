%%writefile admin_dashboard.py
import streamlit as st
import requests

def admin_dashboard():
    st.title("Admin Dashboard")
    # Admin options like user management, ride statistics, etc.
    if st.button("View Ride Statistics"):
        response = requests.get("http://backend_api/admin_service/ride_stats")
        st.write(response.json())
