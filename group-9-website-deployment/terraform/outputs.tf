output "website_public_ip" {
  value = aws_instance.website_server.public_ip
}

output "website_private_ip" {
  value = aws_instance.website_server.private_ip
}